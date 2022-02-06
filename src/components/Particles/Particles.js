import Particles from "react-tsparticles";

const MyParticles = ({ type }) => {

    const particlesOptions = {
        completed: {
            "autoPlay": false,
            "fullScreen": {
                "enable": true,
                "zIndex": -1
            },
            "fpsLimit": 60,
            "interactivity": {
                "detectsOn": "window",
                "events": {
                    "onClick": {
                        "enable": false,
                        "mode": []
                    },
                    "onDiv": {
                        "selectors": [],
                        "enable": false,
                        "mode": [],
                        "type": "circle"
                    },
                    "onHover": {
                        "enable": false,
                        "mode": [],
                        "parallax": {
                            "enable": false,
                            "force": 2,
                            "smooth": 10
                        }
                    },
                    "resize": true
                },
                "modes": {
                    "attract": {
                        "distance": 200,
                        "duration": 0.4,
                        "easing": "ease-out-quad",
                        "factor": 1,
                        "maxSpeed": 50,
                        "speed": 1
                    },
                    "bounce": {
                        "distance": 200
                    },
                    "bubble": {
                        "distance": 200,
                        "duration": 0.4,
                        "mix": false
                    },
                    "connect": {
                        "distance": 80,
                        "links": {
                            "opacity": 0.5
                        },
                        "radius": 60
                    },
                    "grab": {
                        "distance": 100,
                        "links": {
                            "blink": false,
                            "consent": false,
                            "opacity": 1
                        }
                    },
                    "light": {
                        "area": {
                            "gradient": {
                                "start": {
                                    "value": "#ffffff"
                                },
                                "stop": {
                                    "value": "#000000"
                                }
                            },
                            "radius": 1000
                        },
                        "shadow": {
                            "color": {
                                "value": "#000000"
                            },
                            "length": 2000
                        }
                    },
                    "push": {
                        "default": true,
                        "groups": [],
                        "quantity": 4
                    },
                    "remove": {
                        "quantity": 2
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4,
                        "factor": 100,
                        "speed": 1,
                        "maxSpeed": 50,
                        "easing": "ease-out-quad"
                    },
                    "slow": {
                        "factor": 3,
                        "radius": 200
                    },
                    "trail": {
                        "delay": 1,
                        "pauseOnStop": false,
                        "quantity": 1
                    }
                }
            },
            "motion": {
                "disable": false,
                "reduce": {
                    "factor": 4,
                    "value": true
                }
            },
            "particles": {
                
                "color": {
                    "value": [
                        "#1E00FF",
                        "#FF0061",
                        "#E1FF00",
                        "#00FF9E"
                    ],
                   
                },

               
                
                "move": {
                    "angle": {
                        "offset": 0,
                        "value": 90
                    },
                    "attract": {
                        "distance": 200,
                        "enable": false,
                        "rotate": {
                            "x": 3000,
                            "y": 3000
                        }
                    },
                    "decay": 0.1,
                    "distance": {},
                    "direction": "top",
                    "drift": 0,
                    "enable": true,
                    "gravity": {
                        "acceleration": 9.81,
                        "enable": true,
                        "inverse": false,
                        "maxSpeed": 200
                    },
                    "path": {
                        "clamp": true,
                        "delay": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0
                        },
                        "enable": false,
                        "options": {}
                    },
                    "outModes": {
                        "default": "destroy",
                        "bottom": "bounce",
                        "left": "destroy",
                        "right": "destroy",
                        "top": "none"
                    },
                    "random": false,
                    "size": false,
                    "speed": {
                        "min": 50,
                        "max": 150
                    },
                    "spin": {
                        "acceleration": 0,
                        "enable": false
                    },
                    "straight": false,
                    "trail": {
                        "enable": false,
                        "length": 10,
                        "fillColor": {
                            "value": "#000000"
                        }
                    },
                    "vibrate": false,
                    "warp": false
                },
                "number": {
                    "density": {
                        "enable": false,
                        "area": 800,
                        "factor": 1000
                    },
                    "limit": 300,
                    "value": 0
                },
                
               
               
                "roll": {
                    "darken": {
                        "enable": true,
                        "value": 30
                    },
                    "enable": true,
                    "enlighten": {
                        "enable": true,
                        "value": 30
                    },
                    "mode": "vertical",
                    "speed": {
                        "min": 15,
                        "max": 25
                    }
                },
                
                "shadow": {
                    "blur": 0,
                    "color": {
                        "value": "#000000"
                    },
                    "enable": false,
                    "offset": {
                        "x": 0,
                        "y": 0
                    }
                },
                "shape": {
                    "options": {
                        "polygon": [
                            {
                                "sides": 5
                            },
                            {
                                "sides": 6
                            }
                        ],
                        "character": [
                            {
                                "value": [
                                    "💩",
                                    "🤡",
                                    
                                ]
                            }
                        ]
                    },
                    "type": [
                        "circle",
                        "square",
                        "polygon",
                        "character",
                        "character",
                        "character"
                    ]
                },
                "size": {
                    "random": {
                        "enable": true,
                        "minimumValue": 5
                    },
                    "value": 3,
                    "animation": {
                        "count": 10,
                        "enable": true,
                        "speed": 5,
                        "sync": false,
                        "destroy": "none",
                        "startValue": "random"
                    }
                },
               
                "tilt": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": {
                        "min": 0,
                        "max": 360
                    },
                    "animation": {
                        "enable": true,
                        "speed": 60,
                        "sync": false
                    },
                    "direction": "random",
                    "enable": true
                },
                "twinkle": {
                    "lines": {
                        "enable": true,
                        "frequency": 0.05,
                        "opacity": 1
                    },
                    "particles": {
                        "enable": true,
                        "frequency": 0.05,
                        "opacity": 1
                    }
                },
                "wobble": {
                    "distance": 30,
                    "enable": true,
                    "speed": {
                        "min": -15,
                        "max": 15
                    }
                },
                "zIndex": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 0,
                    "opacityRate": 1,
                    "sizeRate": 1,
                    "velocityRate": 1
                }
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "zLayers": 100,
            "emitters": {
                "autoPlay": true,
                "fill": true,
                "life": {
                    "wait": false
                },
                "rate": {
                    "quantity": 10,
                    "delay": 0.1
                },
                "shape": "square",
                "startCount": 0,
                "size": {
                    "mode": "percent",
                    "height": 0,
                    "width": 0
                },
                "position": {
                    "x": 50,
                    "y": 100
                }
            }
        }

    }
    const particlesInit = (main) => {
        // console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions[type]}
        />
    );
};

export default MyParticles;