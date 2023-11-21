import { Manifest } from "deno-slack-sdk/mod.ts";
import { EmailListenerFunction } from "./functions/email_listener_function.ts";
import EmailWorkflow from "./workflows/email_workflow.ts";
import ThreadWorkflow from "./workflows/thread_workflow.ts";

export default Manifest({
  name: "email-response-generator",
  description:
    "An app that creates responses to emails automatically within a thread.",
  icon: "assets/robot-emoji.png",
  workflows: [EmailWorkflow, ThreadWorkflow],
  outgoingDomains: ["api.openai.com"],
  functions: [
    EmailListenerFunction,
  ],
  datastores: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "channels:history",
    "triggers:write",
    "reactions:read",
  ],
});
