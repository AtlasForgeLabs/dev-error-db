---
title: "Docker permission denied"
slug: "docker-permission-denied"
description: "Fix Docker permission denied errors when running docker commands or mounting files."
category: "Docker"
technology: "Docker"
error_signature: "permission denied while trying to connect to the Docker daemon socket"
common_causes:
  - "Current user cannot access the Docker daemon socket"
  - "Docker Desktop or the Docker service is not running"
  - "Bind-mounted files have incompatible ownership or permissions"
  - "A container process is running as a user without required access"
quick_fix: "Start Docker and make sure your user has permission to access the Docker daemon."
related_errors:
  - "Docker cannot connect to the daemon"
  - "Docker no space left on device"
  - "Docker Compose port is already allocated"
updated: "2026-05-10"
---

## What this error means

Docker permission denied errors mean the Docker client, daemon, or container process tried to access a file, socket, or directory without enough operating system permissions.

## Common causes

- The Docker daemon is not running.
- Your Linux user is not in the `docker` group.
- The Docker socket is owned by `root` and the command is running as an unprivileged user.
- A bind mount maps host files that the container user cannot read or write.

## Quick fixes

1. Confirm Docker is running:

   ```bash
   docker version
   ```

2. On Linux, add your user to the Docker group:

   ```bash
   sudo usermod -aG docker "$USER"
   ```

3. Log out and back in so the group change applies.
4. Retry the Docker command.

## Step-by-step troubleshooting

1. Run `docker info` and check whether the daemon responds.
2. Inspect `/var/run/docker.sock` ownership with `ls -l /var/run/docker.sock`.
3. If the failure happens inside a container, check the container user with `id`.
4. For bind mounts, compare host file ownership with the UID and GID used in the container.
5. Avoid using `sudo` as a permanent workaround for development workflows; fix the daemon or file permissions instead.

## Related errors

- `Cannot connect to the Docker daemon`
- `Got permission denied while trying to connect to the Docker daemon socket`
- `EACCES: permission denied`

## FAQ

### Is it safe to add my user to the Docker group?

Only do this on machines where you trust the user account. Docker group access is powerful and can effectively grant root-level control.

### Why does the error happen only with volumes?

The container process may run as a different user than your host user, so mounted files can become unreadable or unwritable.

### Does Docker Desktop need the docker group?

Usually no. Docker Desktop manages access differently on macOS and Windows.
