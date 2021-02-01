![robot](https://user-images.githubusercontent.com/61987773/106432611-406d8980-646f-11eb-92d3-9199a45ed511.gif)

# ROBOT eyes

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Status](#status)
- [Html](#HTML)
- [React](#React)

## General info

Project done during training to learn about some basic React.js concepts such as fetching data in `componentDidMount()`,state management, components focused programming...

## Technologies

- React.js - version 16.13.1

## Setup

Clone the repository then install the dependencies using `yarn`.

Make sure nothing is running on your port 3000.

Use `yarn start`to launch the website.

## Status

Project is _finished_.

# HTML

> Ceci est la structure HTML pour nos yeux,
> nous aurons besoin d'un calque extérieur (la partie extérieure blanche) la pupille des yeux (couche noire)
> et nous utiliserons une pseudo classe pour lui donner la couleur (vert).

```javascript
<div className="head">
  <div className="eye">
    <div className="eye-inner"></div>
  </div>
  <div className="eye">
    <div className="eye-inner"></div>
  </div>
</div>
```

# React

```javascript
import React, { useEffect } from "react";

const eyesRef = useRef(null);

useEffect(() => {
  const container = document.querySelector(".container");

  container.addEventListener("mousemove", (e) => {
    // Pour écouter les mouvements de la souris !
  });
}, [eyesRef]);
```
