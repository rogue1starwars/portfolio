---
title: "WASA Telemeter"
excerpt: "Creating a Telemeter for WASA. Collect and visualize data"
coverImage: "/assets/projects/WASA_Telemeter/cover.png"
projectDate: "AUG 2024"
skills: "Python/nginx/tornado/docker/AWS"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
link: "https://github.com/wasa-rockoon/Telemeter"
---

WASA Telemeter is a server that visualize data sent from various devices. WASA, which is a community in Waseda University, is creating a so-called "Rockoon". A "Rockoon" is a rocket that first carries itself with a balloon, and launches after it reaches the upper atmosphere. WASA Telemeter was created to visualize the current location, altitude, pressure, and transmission of the Rockoon, and make it public on the Internet.

## OVERVIEW

![WASA Telemeter Overview](/assets/projects/WASA_Telemeter/cover.png)

First, data is sent to the API server via WebSocket, where it is processed. Once processed, the data is stored in a database configured with InfluxDB. To visualize the data, custom dashboards are set up in Grafana, which retrieves data from InfluxDB. The dashboard is publicly shared over the Internet. All external access to the server is managed using Nginx. Finally, these services are deployed as Docker containers and run on an AWS EC2 instance.

## TECHNOLOGY

To reduce the amount of data sent to the server, we use a custom data format named "WCPP". The API server, which is configured using tornado, first decodes the formated data, and stores data inside InfluxDB.

All services are managed using docker compose, and is running in an AWS EC2 instance.
