/*
 * Copyright (c) 2020 Miguel Hernandez University of Elche
 * This file is part of openECOE-deploy.
 *
 *     openECOE-deploy is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     openECOE-deploy is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with openECOE-deploy.  If not, see <https://www.gnu.org/licenses/>.
 */

export const environment = {
  production: true,
  SERVER_NAME: '{{domain}}',
  SECRET_KEY: '{{app_secret_key}}',
  DEBUG: false,
  TESTING: false,
  API_ROUTE: 'http://api.{{domain}}',
  API_AUTH_TOKEN: 'http://api.{{domain}}/auth/tokens',
  CHRONO_ROUTE: 'http://chrono.{{domain}}:6080'
};
