| [<img src="https://avatars1.githubusercontent.com/u/46455727?s=400&v=4" width=100 alt="GitHub avatar for author MarkStrickland562">](https://github.com/MarkStrickland562) |
|:-----:|:-----:|:-----:|:-----:|
| [**MarkStrickland562**](https://github.com/MarkStrickland562) |
| Mark Strickland |

## | **Super Galactic Age Calculator** |

###### Created March 22nd, 2019.

----------

## Description
A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. This application will determine a user's age based on a planet's solar years
including the planets Mercury, Venus, Mars and Jupiter. The application will also calculate how many years a user has left on each planet based on average life expectancy.
## Known Bugs

* No known bugs.

## User Stories and Specifications

<details>
  <summary>Click Here for Specifications</summary>

<table>
  <tr>
    <th>Specification 01</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must allow input of a user's date of birth</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Date of Birth</td>
  </tr>
  <tr>Output</td>
    <td>Acknowledgment that a date of birth was entered</td>
  </tr>
  <tr>
    <th>Specification 02</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>A non-null value for date of birth must be entered</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>A non-null value</td>
  </tr>
  <tr>Output</td>
    <td>Error message if a value was not entered</td>
  </tr>
  <tr>
    <th>Specification 03</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The value must be a valid date in the past</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Valid date in the past</td>
  </tr>
  <tr>Output</td>
    <td>Error message if the entered value is not valid</td>
  </tr>
  <tr>
    <th>Specification 04</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the user's age in Earth years</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Valid date in the past</td>
  </tr>
  <tr>Output</td>
    <td>Age in Earth years</td>
  </tr>
  <tr>
    <th>Specification 05</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the entered age in Mercury years (1 Mercury year = .24 Earth years)</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>Output</td>
    <td>Age in Mercury years</td>
  </tr>
  <tr>
    <th>Specification 06</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the entered age in Venus years (1 Venus year = .62 Earth years)</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>Output</td>
    <td>Age in Venus years</td>
  </tr>      
  <tr>
    <th>Specification 07</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the entered age in Mars years (1 Mars year = 1.88 Earth years)</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>Output</td>
    <td>Age in Mars years</td>
  </tr>
  <tr>
    <th>Specification 08</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must return the entered age in Jupiter years (1 Jupiter year = 11.86 Earth years)</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>Output</td>
    <td>Age in Jupiter years</td>
  </tr>
  <tr>
    <th>Specification 09</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must allow input of a user's life expectancy</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Life Expectancy</td>
  </tr>
  <tr>Output</td>
    <td>Acknowledgment that a life expectancy was entered</td>
  </tr>
  <tr>
    <th>Specification 10</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must calculate the users life expectancy on Mercury</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>Output</td>
    <td>Life expectancy on Mercury</td>
  </tr>    
  <tr>
    <th>Specification 11</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must calculate the users life expectancy on Venus</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>Output</td>
    <td>Life expectancy on Venus</td>
  </tr>    
  <tr>
    <th>Specification 12</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must calculate the users life expectancy on Nars</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>Output</td>
    <td>Life expectancy on Mars</td>
  </tr>    
  <tr>
    <th>Specification 13</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>The application must calculate the users life expectancy on Jupiter</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>Output</td>
    <td>Life expectancy on Jupiter</td>
  </tr>    
  <tr>
    <th>Specification 14</th>
    <th></th>
  </tr>
  <tr>
    <td>Behavior</td>
    <td>If the user has surpassed their life expectancy, the application must return the number of years they have lived past their life expectancy</td>
  </tr>
  <tr>
    <td>Input</td>
    <td>Positive integer</td>
  </tr>
  <tr>Output</td>
    <td>Number of years lived passed life expectancy</td>
  </tr>    
</details>

## Setup and Use

#### Prerequisites


#### Download Repo
1. Clone [this repository](https://github.com/MarkStrickland562/GalacticAgeCalculator): _$ git clone https://github.com/MarkStrickland562/GalacticAgeCalculator.git

#### Open Locally - Browser

#### Open Locally - Mono

#### Compile Locally

#### Edit

#### Test

## Built With

* Windows 10.1
* iMac OS X El Capitan 10.11.6
* Linux Ubuntu 18.04 bionic
* Atom (IDE)

## Support and contact details

If you have any feedback or concerns, please contact Mark Strickland.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2019 [Mark Strickland](https://github.com/MarkStrickland562). All Rights Reserved.
```
MIT License

Copyright (c) 2019 Mark Strickland

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
