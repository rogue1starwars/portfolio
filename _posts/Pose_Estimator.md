---
title: "Pose Estimator"
excerpt: "Creating a pose estimator for illustration sketches"
coverImage: "/assets/projects/wasa_rocket_homepage(2024)/cover.png"
projectDate: "MAY 2024"
skills: "PyTorch/Python/Machine Learning"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
link: "https://github.com/wasa-rocket/website"
---

We created a Deep Learning model for pose estimation of illustration sketches. The purpose of this project to eventually create a pose-based image retrieval software which can associate images even from rough sketches.

## OVERVIEW

![wasa homepage overview](</assets/projects/wasa_rocket_homepage(2024)/overview.png>)

We used the Facebook's [Detectron2](https://ai.meta.com/tools/detectron2/) keypoint estimation model, and fine-tuned the model for illustration rough sketches. 
For fine-tuning, we used the illustration keypoint dataset from the [Bizarre Pose Estimator Model]()

## Figma

![wasa rocket figma image](</assets/projects/wasa_rocket_homepage(2024)/figma.png>)

In order to create the UI design, we used Figma. The design has changed as the project went on, but the basic design was determined at this stage.

## Framer Motion

![wasa rocket figma image](</assets/projects/wasa_rocket_homepage(2024)/framermotion.png>)

Some of the elements have animation built-in for better design. We used the Framer Motion library to implement all the animation.

## Logo Design

![wasa rocket figma image](</assets/projects/wasa_rocket_homepage(2024)/logo.png>)

For the logo design, we used Clip Studio Paint and Figma to create a unique logo design for each of the projects. We made sure that all the logos have an iconic design related to the project.

## mico CMS

![wasa rocket figma image](</assets/projects/wasa_rocket_homepage(2024)/microcms.png>)

We wanted to allow other members of the club edit and add blog posts easily, so we connected our project with microCMS. By using this CMS service the user can Easily add and edit blog posts from the web, just like google docs.

## Deployment

We used Vercel to deploy this project. When using Vercel, the main branch of GitHub will automatically be deployed, so extra caution will be required to protect the main branch. In order to protect the main branch from critical issues, we used the GitHub flow method.
