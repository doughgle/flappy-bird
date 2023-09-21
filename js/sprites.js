const sprites = {
  bird: {
    frames: [
      {x: 276, y: 112, width: 34, height: 24},
      {x: 276, y: 136, width: 34, height: 24},
      {x: 276, y: 160, width: 34, height: 24}
    ],
    speed: 0.1
  },
  pipes: {
    top: {x: 553, y: 0},
    bottom: {x: 502, y: 0},
    width: 53,
    height: 400,
    gap: 85,
    speed: 2
  },
  background: {x: 0, y: 0, width: 275, height: 226},
  ground: {x: 276, y: 0, width: 224, height: 112}
};

export default sprites;