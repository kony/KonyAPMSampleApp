# KonyAPMSampleApp
Application to showcase Kony APM features.
  - Dynamically set autocapture
  - Dynamically set flowtag and User
  - Testing the APM Autocapture Events

# To run this app
- Set up an application on your Mobile Fabric Cloud Account and publish it. (It may be a dummy application also)
- Download the KonyAPMSampleApp zip file and import to Kony Studio
- In Application Properties -> Kony Server Details -> Server choose the cloud you have published your application on.
- In the Metrics APM Tab Enable automatic event capture and what all auto capture events you want to track.
- The Mobile Fabric tab will list your applications on your Mobile Fabric account. Choose the application you had earlier published in step 1.
- For testing service request/response auto capture, you need to publish the service on the mobile fabric application you had made in step 1. And call it on the "onClick" event of frmEvents-> btnService.
- Build and launch the application.

# Supported platforms:
**Mobile**
 * Android
 * iPhone
