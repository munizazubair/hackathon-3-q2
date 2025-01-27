// /schemas/faqQuestion.js
export default {
    name: "faqQuestion",
    title: "FAQ Question",
    type: "document",
    fields: [
      {
        name: "question",
        title: "Question",
        type: "string",
      },
      {
        name: "status",
        title: "Status",
        type: "string",
        options: {
          list: ["Pending", "Answered"],
        },
        initialValue: "Pending",
      },
      {
        name: "answer",
        title: "Answer",
        type: "text",
      },
    ],
  };
  