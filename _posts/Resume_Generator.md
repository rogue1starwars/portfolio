---
title: "Resume Generator"
excerpt: "A web application that automates your resume creation"
coverImage: "/assets/projects/Resume_Generator/cover.png"
projectDate: "JUL 2024"
skills: "Next.js/React/Typescript"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
link: "https://github.com/rogue1starwars/resume-generator"
---

Writing a resume can be an overwhelming task. In our GDSC Waseda collaboration project, we created a "Resume Generator", which allows users create resumes easily.

[Learn more about GDSC Waseda](https://developers.google.com/community/gdsc)

## OVERVIEW

![Resume Generator overview](/assets/projects/Resume_Generator/cover.png)

With a friendly google forms-like UI, users can easily input their personal infromation for their resume. Thanks to it's responsive design, it can be used in any device, such as smartphones, tablets, and computers.

## TECHNOLOGY

![Resume Generator technology](/assets/projects/Resume_Generator/technology.png)

Resume Generator is built with Next.js and deployed on Vercel. All user input is stored in a state, allowing users to dynamically add or delete sections as needed due to this structure. The resume data is saved in local storage, and the actual resume is generated on the client side using the 'react-to-print' library. This means the application does not send any data to the server, making it highly secure.

## USAGE

Resume Generator is a web application, and it can be used from [here](https://resume-generator-hazel.vercel.app/)

## PRESENTATION

This application was presented by our team in the 2024 GDSC innovation showcase.
