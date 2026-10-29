# Robot Easy — Physical AI for Software Developers

Robot Easy is a browser-based tool that helps people from software and IT backgrounds understand how software connects to physical robots. Users can describe a robot task, generate a hardware and software blueprint, and test an articulated robot arm in an interactive 3D workcell.

**Live demo:** https://ashishchaturvedi7-robot-easy.static.hf.space

## Features

- Converts a plain-language robot idea into a beginner-friendly blueprint.
- Recommends compute, drive, battery, motor-control, sensor, and safety components.
- Calculates an estimated bill of materials.
- Shows connection guidance, software architecture, and ordered build steps.
- Runs an interactive Three.js robot-arm workcell in the browser.
- Uses inverse kinematics for overhead pick-and-place motion.
- Links to the official FANUC CRX-3iA SimReady OpenUSD asset.
- Exports the generated plan as JSON.

## How to use it

### 1. Describe the robot

Open the live demo and select the job, environment, intelligence level, payload, and approximate budget. Optionally describe the idea in plain language, then select **Generate My Robot Blueprint**.

### 2. Review the blueprint

The generated blueprint includes:

1. **Parts** — recommended hardware and estimated prices.
2. **Connect** — a simplified power and signal connection map.
3. **Software** — proposed API, navigation, perception, and motor-control layers.
4. **Build steps** — a safe order for assembling and testing the prototype.

Select **Download Plan** to save the result as JSON.

### 3. Run the 3D simulation

Scroll to **3D Robot Workcell** and select **Run Pick & Place**. The arm calculates joint angles, approaches from above, grips the object, lifts to a clearance waypoint, transfers it, releases it, and returns home.

Drag inside the viewport to orbit the camera, scroll to zoom, or use the joint sliders for manual control.

## Software engineer mental model

```text
Application and mission logic
            ↓
Robot API
            ↓
Planning and perception
            ↓
Joint and motor commands
            ↓
Sensors, actuators, and the physical world
```

Start with high-level behaviour:

```python
robot.move_to("pickup")
robot.gripper.close()
robot.move_to("destination")
robot.gripper.open()
```

The lower layers translate these actions into trajectories, joint angles, and motor commands.

## Run locally

No build process or backend is required:

```powershell
git clone https://github.com/ASHTOW2102/PhysicalAI.git
cd PhysicalAI/robot-easy
python -m http.server 8000
```

Open http://localhost:8000. Internet access is required to load Three.js from the CDN and open external SimReady resources.

## Project structure

```text
robot-easy/
├── index.html      # Application interface
├── app.js          # Blueprint generator and planning logic
├── sim3d.js        # Three.js workcell and inverse kinematics
├── style.css       # Main visual design
├── sim3d.css       # 3D workcell styles
├── guide.css       # Quick-start guide styles
├── fixes.js        # Blueprint data normalization
└── README.md
```

## Technology

- HTML, CSS, and JavaScript
- Three.js and OrbitControls
- Browser-based inverse kinematics
- Hugging Face static Spaces
- OpenUSD and NVIDIA SimReady references

## References

- [NVIDIA SimReady Central announcement](https://huggingface.co/blog/nvidia/simready-central-assets-robotics-ai-factories)
- [SimReady Central Library](https://huggingface.co/datasets/nvidia/simready-central-library)
- [FANUC SimReady Assets](https://huggingface.co/datasets/FANUC-CORPORATION/SimReady-Assets)
- [FANUC CRX-3iA OpenUSD asset](https://huggingface.co/datasets/FANUC-CORPORATION/SimReady-Assets/blob/main/crx3ia/simready_usd/crx3ia.usd)
- [Hugging Face OpenUSD viewer documentation](https://huggingface.co/docs/hub/datasets-3d)

## Important limitation

The browser workcell is an educational kinematic demonstration, not a certified physics or safety simulator. Verify component specifications, electrical connections, joint limits, collision behaviour, emergency-stop operation, and manufacturer instructions before constructing or operating physical hardware.

## License

This project is released under the MIT License. Third-party assets and libraries remain subject to their respective licenses.
