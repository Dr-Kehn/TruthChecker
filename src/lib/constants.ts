export const abi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "submitter",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "content",
          type: "string",
        },
      ],
      name: "SubmissionCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "enum FactChecker.Verdict",
          name: "result",
          type: "uint8",
        },
      ],
      name: "VerdictDecided",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "voter",
          type: "address",
        },
        { indexed: false, internalType: "bool", name: "vote", type: "bool" },
      ],
      name: "Voted",
      type: "event",
    },
    {
      inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
      name: "getSubmissionById",
      outputs: [
        { internalType: "address", name: "submitter", type: "address" },
        { internalType: "string", name: "content", type: "string" },
        { internalType: "uint256", name: "trueVotes", type: "uint256" },
        { internalType: "uint256", name: "falseVotes", type: "uint256" },
        {
          internalType: "enum FactChecker.Verdict",
          name: "finalVerdict",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_startIndex", type: "uint256" },
        { internalType: "uint256", name: "_count", type: "uint256" },
      ],
      name: "getSubmissions",
      outputs: [
        { internalType: "uint256[]", name: "ids", type: "uint256[]" },
        { internalType: "address[]", name: "submitters", type: "address[]" },
        { internalType: "string[]", name: "contents", type: "string[]" },
        { internalType: "uint256[]", name: "trueVotes", type: "uint256[]" },
        { internalType: "uint256[]", name: "falseVotes", type: "uint256[]" },
        {
          internalType: "enum FactChecker.Verdict[]",
          name: "finalVerdicts",
          type: "uint8[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTotalSubmissions",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_id", type: "uint256" },
        { internalType: "address", name: "_voter", type: "address" },
      ],
      name: "hasVoted",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "submissionCount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "_content", type: "string" }],
      name: "submitContent",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_id", type: "uint256" },
        { internalType: "bool", name: "_isTrue", type: "bool" },
      ],
      name: "vote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "voteThreshold",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
];
