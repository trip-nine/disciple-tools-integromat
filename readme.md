Disciple Tools Integromat App
Version 2.0
Released 4/11/21

Instructions:

"WP OAuth Server" (by WP OAuth Server) Plugin:
Add the "WP OAuth Server" plugin to your DT Wordpress instance
You can search for this plugin in your wp-admin 'add new plugins' section, search 'wp-oauth', then install & activate.
Or download direct from https://wordpress.org/plugins/oauth2-provider/ (once downloaded in a zip format, go into your wp-admin plugin section, upload & activate).

More information about this plugin can be found here: https://wp-oauth.com/

This plugin has a basic version for free and a premium version that allows for a continual OAUTH2 connection to your server.
The basic version does not include a refresh token which means it will need to be reauthenticated each hour of use.
The premium version includes a refresh token feature which allows for a continuous connection to your server from Integromat.
The cost of a premium wp-oauth license is $89/year for 1 site or $199/year for unlimited sites. 

Recommendation: 
Try the basic free version first, do a FB Lead / ManyChat test to verify that the connection will work with your use case.
Once you verify such, I highly recommended buying a premium license of the plugin ($89-$199/year). 
This is especially recommended if you are doing high volume lead campaigns, to not have to manually re-authenticate each hour (the basic plugin's 'token lifetime limit')..

Once you settle on a license option (free vs premium), you will need to create your first OAUTH2 Client from your wordpress server (within the wp-oauth plugin on your dt instance).
This will generate a Client ID & a Client Secret.

The OAUTH2 Client is what you will need to provide the Disciple Tools Integromat app once you are ready to setup your scenario.

Setting up Scenario:
To set up the scenario, you will need to connect Integromat first to Facebook Lead Forms or ManyChat.
Once this is done, you will need to add the Disciple Tools Integromat App to your scenario.
Then you will need to set up your Disciple Tools App connection.
This is where you will provide your Client ID, Client Secret, and the base URL of your DT website (for authentication purposes).

Once you do this, you will need to map out your variables that are being pulled from Facebook Lead Forms or ManyChat.

Mappable Parameters:
This Integromat app includes 4 basic mappable parameters on a contact. These should work whether you are pulling it from Facebook Lead Forms or ManyChat.

-Name 
(creates Disciple Tools Contact Name ('title'))

-Phone Number 
(creates Disciple Tools Contact Phone ('contact_phone'))

-Location 
(creates Disciple Tools Contact Location* ('location_grid'))

-Campaign Source 
(creates Disciple Tools campaign source ('source'), ie Facebook March campaign, ManyChat April campaign)

-City from Facebook Leads 
(creates a contact source ('source') specific for Facebook Lead Forms. This is mapped from the 'city' field in a Facebook Lead Form)


*The location field needs to be hardcoded to the country, region, or city map code of where you are running your campaign.
This is found in wp-admin under 'Mapping' -> 'Locations List' -> 'Country' -> 'Locations under country' -> any so on..
This code will be a long numerical value,. 

Example - Shan State, Myanmar is '100248471'. 
If you are doing your campaign in Shan State, Myanmar, you will want to map '100248471' to the Location's variable. 
The reason for this is that the Disciple Tools mapping parameters are all coded to numerical values in the backend for analytics purposes.
So you cannot add a location name in word form, the contact creation will fail.

Troubleshooting Tips:
"My Disciple Tools App connection is failing.."
Check That Your Disciple Tools Connection 'Base URL' field includes https:// before (your site).com

"My Disciple Tools Contact creation is failing.."
Check that your connection is authenticated and you have mapped the variables correctly.
Note: Facebook Leads nest their variables, so you will need to unfold the variable down to the base object.

FAQs:
Q: Can I use this module to connect other sources beside Facebook & ManyChat?
A: Yes, you can connect Disciple Tools to any integromat app. Just keep in mind that this DT Integromat App only supports the above variables for contact creation.

Q: Is support help available for setup?
A: Support help is available for partner organizations of disciple.tools.

Contact:
For any further needs, please contact support@harvestnations.com 