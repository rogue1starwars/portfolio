---
title: "WASA Rocket Project"
projectDate: "SEP 2023"
excerpt: "Implemented a self-driving probe leveraging Arduino, image recognition, GPS, and related technologies."
coverImage: "/assets/projects/wasa_rocket_project(2023)/cover.png"
date: "2020-03-16T05:35:07.322Z"
ogImage:
  url: "/assets/projects/wasa_rocket_project(2023)/cover.png"
---

I participated in the development of a self-driving probe as part of a collaborative team, including integrating GPS, computer vision, and 9-axis sensors to reach a specific goal. I was responsible for circuit construction and programming for the 9-axis sensor, SD card, and AI vision camera.
We presented our project at the Noshiro Space event in Akita, Japan.

## HARDWARE

The core computing system for the probe is Arduino, to which we integrated a GPS module, a 9-axis sensor, a pressure sensor, a camera, an SD card, and 2 DC motors.

![wasa cansat flow chart](</assets/projects/wasa_rocket_project(2023)/cansat_hardware.svg#center>)

## SOFTWARE

We used Arduino IDE to develop the software for this project, an IDE using a language similar to C and C++.

## ALGORITHM

Firstly, the probe is launched from the air and deployed with a parachute.
Utilizing the pressure sensor and the 9-axis sensor, it detects when it lands on the ground.
Subsequently, the probe utilizes the GPS module and the 9-axis sensor to ascertain the direction toward the goal and proceeds to move accordingly.
While the GPS module can guide the probe approximately toward the goal, it lacks precision in determining the exact location. At this moment, computer vision comes into play. When the probe nears the goal, an AI vision camera is employed to precisely detect the goal's exact location.
