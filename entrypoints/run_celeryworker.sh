#!/bin/sh

# Copyright 2017-2018 Dunbar Security Solutions, Inc.
#
# This file is part of Cyphon Engine.
#
# Cyphon Engine is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, version 3 of the License.
#
# Cyphon Engine is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Cyphon Engine. If not, see <http://www.gnu.org/licenses/>.

# wait for PSQL server to start
sleep 20

cd /usr/src/app/cyphon

# migrate db, so we have the latest db schema
su-exec cyphon python manage.py migrate --verbosity 0

# run Celery worker for Cyphon with Celery configuration stored in celeryapp
su-exec cyphon celery worker -A cyphon -l ERROR
