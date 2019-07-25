# Patient Health Records - App Modernization with RedHat OpenShift

This project is a patient records user interface for a conceptual health records system. The UI is programmed with open standards JavaScript and modern, universal CSS, and HTML5 Canvas for layout.

The UI is served by a simple Node.JS Express server, and the overall project goals are:

- to use the project to show a step by step guide of deploying the app on OpenShift Source to Image ( S2I )
- to illustrate the versatility of Kubernetes based micro services for modernizing traditional applications - for instance mainframe based applications, or classic Java app server applications
- to experiment and explore open standards front end technologies for rendering custom charts, and for responsive design

This project stands alone in test mode, or integrates with associated projects [ paths to other projects ]

![architecture](./design/architecture@2x.png)


#### Example Health Context

Example Health is a fictional, conceptual healthcare/insurance type company. It is imagined to have been around a long time, and has 100s of thousands of patient records in an SQL database connected to a either a mainframe, or a monolithic Java backend.

The business rules for the system is written in COBOL or Java. It has some entitlement rules, prescription rules, coverage rules coded in there.

Example's health records look very similar to the health records of most insurance companies.

Here's a view a client might see when they log in:

![screenshot](./design/mockup.png)

Example has recently started understanding how machine learning on some of the patient records, might surface interesting insights. There is lots of talk about this among some of the big data companies.

https://ai.googleblog.com/2018/05/deep-learning-for-electronic-health.html

https://blog.adafruit.com/2018/04/16/machine-learning-helps-to-grok-blood-test-results/

[ concept screenshot to come ]

Example has also heard a lot about cloud computing. There is a lot of traditional code in the mainframe, and it works well for now ... but Example think it may be a complimentary opportunity to explore some machine learning in the cloud ( either public or private )

Their CTO sees an architecture like this:


#### Project aims

This project aims to create a minimal data record system to flesh out this example - showing some cobol/java in action on a mainframe. Triggering a machine learning event using cloud functions, when a patient bloodtest record updates. Showing the new private cloud working alongside the old mainframe technology, and giving us a reference example to carve off pattern excerpts in an interesting collection.

### Installation

First, you'll need a cluster. [Follow the directions](https://cloud.ibm.com/docs/containers?topic=containers-openshift_tutorial#openshift_create_cluster) to create a Red Hat OpenShift on IBM Cloud cluster.

Next, you will need a fork of this repository. Scroll back up to the top of this page and click on the Fork button.

![fork](./images/fork.png)

Select your github user name from the pop-up window.

To deploy your just-forked repository, go to the Web Console for your OpenShift cluster and click on the 'Node.js' icon.

![node](./images/node.png)

In the following window, first click 'next' and then select 'advanced options' towards the bottom.

![config](./images/config.png)

Use `https://github.com/<your github id>/Example-health-patient-records` for the Git Repository URL and `/site` for the Context Dir. Click 'Create' at the bottom of the window to build and deploy the application.

Once the app is deployed, you will need to change the port number in the service and the route.  Click on both, choose 'Edit YAML' from the drop-down menu in the uppper right, and change all instances of `8080` to `8060`. Click on the route provided, and login to your new app!
