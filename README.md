# Patient Health Records - App Modernization with RedHat OpenShift

This project is a patient records user interface for a conceptual health records system. The UI is programmed with open standards JavaScript and modern, universal CSS, and HTML5 Canvas for layout.

The UI is served by a simple Node.js Express server, and the overall project goals are:

- to use the project to show a step by step guide of deploying the app on OpenShift Source-to-Image (S2I)
- to illustrate the versatility of Kubernetes based micro services for modernizing traditional applications - for instance mainframe based applications, or classic Java app server applications
- to experiment and explore open standards front end technologies for rendering custom charts, and for responsive design

This project stands alone in test mode, or integrates with associated code patterns:

- [Creating a health data analytics app](https://developer.ibm.com/patterns/creating-a-health-data-analytics-app-with-legacy-mainframe-code-and-cloud/)
- [Java EE application modernization](https://developer.ibm.com/patterns/jee-app-modernization-with-openshift/)
- [PHP admin front-end](https://developer.ibm.com/technologies/containers/patterns/app-modernization-php-s2i-openshift/)

![architecture](./design/app-modernization-openshift-s2i-architecture-diagram.png)


#### Example Health Background Story

Example Health is a pretend, conceptual healthcare/insurance type company. It is imagined to have been around a long time, and has 100s of thousands of patient records in an SQL database connected to a either a mainframe, or a monolithic Java backend.

The business rules for the system are written in COBOL or Java. It has some entitlement rules, prescription rules, and coverage rules coded in there.

Example's health records look very similar to the health records of most insurance companies.

Here's a view a client might see when they log in:

![screenshot](./design/mockup.png)

Example Health business leaders have recently started understanding how machine learning, using some of the patient records, might surface interesting insights that would benefit patients. There is lots of talk about this among some of the big data companies:

- https://ai.googleblog.com/2018/05/deep-learning-for-electronic-health.html
- https://blog.adafruit.com/2018/04/16/machine-learning-helps-to-grok-blood-test-results/

Example has also heard a lot about cloud computing. There is a lot of traditional code in the mainframe and in classic Java app servers. It works well for now ... but some of the software architects think it may be complimentary to explore some machine learning, and to accelerate development of new user interfaces in the cloud (either public or private).


#### Project aims

In this repo there is a patient user interface. It is written using plain HTML, CSS and JavaScript served from a Node.js microservice. The code runs by default with test/demo data, that doesn't rely on a more sophisticated server. The following installation steps can help you easily deploy this using OpenShift S2I.

### Installation

First, you'll need a cluster. [Follow the directions](https://cloud.ibm.com/docs/containers?topic=containers-openshift_tutorial#openshift_create_cluster) to create a Red Hat OpenShift on IBM Cloud cluster.

Next, you will need a fork of this repository. Scroll back up to the top of this page and click on the Fork button.

![fork](./images/fork.png)

Select your github user name from the pop-up window.

To deploy your just-forked repository, go to the Web Console for your OpenShift cluster and create a project by clicking on the blue **Create Project** on the upper left from the **Home** --> **Projects** screen available from the navigation menu on the left:

![create project](./images/createproject.png)

Now use the very top dropdown from the navigation menu on the left to switch from the **Administrator** view to **Developer**. From the **+Add** screen, select the **From Git** tile.

![add](./images/add.png)

Use the URL of your forked repository in the **Git Repo URL** text imput. Click the **Show Advanced Git Options** bar to reveal those options, and specify `/site` as the **Context Dir**. Choose the **Node.js** tile from the list of Builder Images.

![import](./images/import.png)

Scroll to the bottom of the screen and click the blue **Create** button at the bottom. OpenShift will take you to the **Topology** and once the deployment is finished, a green check will appear on the lower left of the Node icon.

![build](./images/build.png)

When the build is complete, click on  **Open URL** on the upper right of the Node icon. You should see the login screen:

![login](./images/login.png)

You can enter any strings for username and password, for instance test/test... because the app is just running in demo mode.

And you've deployed a Node.js app to Kubernetes using OpenShift S2I.

## License

This code pattern is licensed under the Apache License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1](https://developercertificate.org/) and the [Apache License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache License FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)

