import Image from "next/image";
import React from "react";

const Process = () => {
  const content = {
    info: {
      title: "How it Works",
      subtitle: "Discover how our AI Chatbot Works",
      description:
        "Our AI chatbot guides you through a seamless diagnosis process. From your initial chat to receiving personalized results, we prioritize your health and convenience.",
    },
    steps: [
      {
        title: "Step 1: Start Your Conversation",
        description: "Simply initiate a chat with our AI.",
      },
      {
        title: "Step 2: Answer Key Questions",
        description:
          "Provide relevant information to help refine your diagnosis.",
      },
      {
        title: "Step 3: Receive Your Diagnosis",
        description: "Get immediate feedback and next steps for your health.",
      },
    ],
  };
  return (
    <section className="">
      <div className="max-container flex flex-col gap-24 padding-container py-10 pb-32 8 lg:py-20 overflow-visible">
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="font-section-title">{content.info.title}</div>
          <div className="font-heading">{content.info.subtitle}</div>
          <div className="font-lato font-medium w-2/3 lg:w-1/2">
            {content.info.description}
          </div>
        </div>
        <div className="flex flex-col gap-12 lg:grid grid-cols-3">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center text-center"
            >
              <Image
                src="/cube.png"
                alt="cube"
                width={48}
                height={48}
                className=""
              />
              <div className="font-process-title">{step.title}</div>
              <div className="font-lato w-5/6">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
