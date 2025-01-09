---
slug: reacdif
title: "Reaction Diffusion GLSL"
description: >
  An implementation of the Gray-Scott reaction-diffusion model to produce patterns similar to those commonly found in nature, built using Three.js and GLSL shaders for faster simulation.
stack:
  - Javascript
  - Three Js
  - GLSL
  - WEBGL
links:
  - name: "Github"
    url: "https://github.com/Kolark/ReactionDiffusionPlayGround"
  - name: "Website"
    url: "/projects/reactiondiffusion/index.html"

img: "reactiondiff/reactiondiff.jpg"
date: "Feb 2024"
order: 5
draft: false
---

This is an implementation of the Gray-Scott reaction-diffusion model, as explained in this [article](https://groups.csail.mit.edu/mac/projects/amorphous/GrayScott/).

I first implemented it in Python back in 2021 during a class on mathematical models. However, it was very slow, as simulating smaller images on the cpu could take a couple of minutes. Since then, I’ve wanted to create a real-time simulation using the gpu, such as this [one](https://pmneila.github.io/jsexp/grayscott/). A couple of years later, I finally built it using three js, and the result can be seen [here](/projects/reactiondiffusion/index.html):

Example 1             |  Example 2          | Example 3
:-------------------------:|:-------------------------:|:-------------------------:
![image](/imgs/reactiondiff/reactiondiff.jpg)  |  ![image](/imgs/reactiondiff/example2.jpg)  | ![image](/imgs/reactiondiff/example3.jpg)




In this simulation, you can experiment with different parameters to observe the patterns that are generated. There is also an additional parameter, which I decided to call "fun", as it can produce interesting results.

![image](/imgs/reactiondiff/example1.jpg)

You can also change the color palette being used. The palette implementation uses the wave equation parameters to modify each individual RGB channel. It is taken from Inigo Quilez's [article](https://iquilezles.org/articles/palettes/) on procedural palettes.

![image](/imgs/reactiondiff/colorpalette.jpg)