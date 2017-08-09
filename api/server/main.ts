import { Meteor } from 'meteor/meteor';
import {ServiceConfiguration} from 'meteor/service-configuration';

Meteor.startup(() => {
    // process.env.ROOT_URL = 'http://localhost:3000';
  // code to run on server at startup
    ServiceConfiguration.configurations.upsert(
        { service: "facebook" },
        { $set: { appId: "305121806606130", secret: "5878f386a614466e547c0aa6226293c4", loginStyle: "popup" } }
    );
});
