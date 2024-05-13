---
title: "Pose Estimator"
excerpt: "Creating a pose estimator for illustration sketches"
coverImage: "/assets/projects/Pose_Estimator/cover.png"
projectDate: "Currently working"
skills: "PyTorch/Python/Machine Learning"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
link: "https://github.com/yamanoko/sketch_pose/blob/master/finetune_sketch.ipynb"
---

I am creating a Deep Learning model for pose estimation of illustration sketches with the cooperation of [yamanoko](https://github.com/yamanoko/). The purpose of this project to eventually create a pose-based image retrieval software which can associate images even from rough sketches.

## OVERVIEW

![wasa homepage overview](/assets/projects/Pose_Estimator/overview.png)

We used the Facebook's [Detectron2](https://ai.meta.com/tools/detectron2/) keypoint estimation model, and fine-tuned the model for illustration rough sketches.

We first fine-tuned the model with a large dataset including keypoint annotations for illustrations. After fine-tuning the model with illustrations, we then tuned the model with 20 rough sketches so that the model can create annotations even from sketches.

## Datasets

![retrieval figure from Bizarre Pose Estimation](/assets/projects/Pose_Estimator/retrieval_figure.png)
Source: [Bizarre Pose Estimator Model](https://github.com/ShuhongChen/bizarre-pose-estimator)

First we tuned the model with a COCO-compliant illustration dataset with annotations, provided from the [Bizarre Pose Estimator Model](https://github.com/ShuhongChen/bizarre-pose-estimator).
After fine-tuning the model with the dataset provided from the Bizarre Pose Estimator, we then tuned the model with our custom dataset, which includes 20 rough sketch illustrations with annotations.

## Future plans

There are several future plans for this project.

### 1. Create algorithm to associate images from keypoints

Our goal is to create a software where users can search image references from rough sketches. We created a model to annotate keypoints from rough sketches, but we have not completed the algorithm to find similar image from the keypoint information. We are now working on calculating the distances between each keypoints.

### 2. Test with other models.

We initialy created the model by fine-tuning the Detectron2 rcnn model, but we are currently testing with other rcnn models, such as the [PyTorch official keypoint rcnn model](https://pytorch.org/vision/main/models/keypoint_rcnn.html).

Although Detectron2 is an easy-to-use framework for keypoint detection, it is difficult to customize. On the other hand, the PyTorch keypoint rcnn model is a relatively simple model, allowing users to change the backbone of the model.

### 3. Deploy the model to a Flask application.

We currently have not deployed the model yet, so we are planning to create a Flask application and create a dockerfile so that users can easily use our model for content creation.

### 4. Provide a larger dataset for rough sketches

We created a dataset with 20 rough sketches with keypoint annotations. Because we first fine-tuned the model with the illustration dataset provided by the [Bizarre Pose Estimator Model](https://github.com/ShuhongChen/bizarre-pose-estimator), the model was capable of estimating keypoints from rough sketches even with small amount of data. However, we are planning to create a larger dataset for rough sketches in order to improve the accuracy of our model.
