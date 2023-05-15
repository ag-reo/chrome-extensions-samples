// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Alerts the user when an authorization request is requested via the console
chrome.webRequest.onAuthRequired.addListener((details, callback) => {
  console.log('An authorization request has been detected');
  if (details.url == 'https://jigsaw.w3.org/HTTP/Basic/') {
    // Creating some credentials
    const username = 'username';
    const password = 'password';
    // Creating an auth handler to use the credentials
    const authCredentials = {
      authCredentials: {
        username: username,
        password: password
      }
    };
    callback(authCredentials);
  }
});
