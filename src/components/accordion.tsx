import React, { useState } from 'react';

export const Accordion = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'accordion-collapse-body-1': false,
    'accordion-collapse-body-2': false,
    'accordion-collapse-body-3': false,
    'accordion-collapse-body-4': false,
    'accordion-collapse-body-5': false,

  });

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div id="accordion-collapse" className="accordion-collapse">
      {/* Item 1 */}
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="accordion-button"
          onClick={() => toggleItem("accordion-collapse-body-1")}
          aria-expanded={expandedItems["accordion-collapse-body-1"]}
          aria-controls="accordion-collapse-body-1"
        >
          <span>What is TruthCheck?</span>
          <svg
            className={`accordion-icon ${
              expandedItems["accordion-collapse-body-1"] ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`accordion-content ${
          expandedItems["accordion-collapse-body-1"] ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="accordion-panel">
          <p className="accordion-text">
            TruthCheck is a decentralized fact-checking platform where the
            community verifies claims using collective evidence, transparent
            voting, and web3 technology. It&apos;s designed to combat
            misinformation by empowering users to validate facts together.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="accordion-button"
          onClick={() => toggleItem("accordion-collapse-body-2")}
          aria-expanded={expandedItems["accordion-collapse-body-2"]}
          aria-controls="accordion-collapse-body-2"
        >
          <span>How does TruthCheck work?</span>
          <svg
            className={`accordion-icon ${
              expandedItems["accordion-collapse-body-2"] ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`accordion-content ${
          expandedItems["accordion-collapse-body-2"] ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="accordion-panel">
          <p className="accordion-text">This app works ... </p>
        </div>
      </div>

      {/* Item 3 */}
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="accordion-button"
          onClick={() => toggleItem("accordion-collapse-body-3")}
          aria-expanded={expandedItems["accordion-collapse-body-3"]}
          aria-controls="accordion-collapse-body-3"
        >
          <span className="mr-2">
            What makes this different from traditional fact-checking platforms?
          </span>
          <svg
            className={`accordion-icon ${
              expandedItems["accordion-collapse-body-3"] ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`accordion-content ${
          expandedItems["accordion-collapse-body-3"] ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="accordion-panel">
          <p className="accordion-text">
            Traditional platforms rely on centralized authorities, while
            TruthCheck uses decentralized community verification.
          </p>
        </div>
      </div>

      {/* Item 4 */}
      <h2 id="accordion-collapse-heading-4">
        <button
          type="button"
          className="accordion-button"
          onClick={() => toggleItem("accordion-collapse-body-4")}
          aria-expanded={expandedItems["accordion-collapse-body-4"]}
          aria-controls="accordion-collapse-body-4"
        >
          <span>Who can participate in validating claims?</span>
          <svg
            className={`accordion-icon ${
              expandedItems["accordion-collapse-body-4"] ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-4"
        className={`accordion-content ${
          expandedItems["accordion-collapse-body-4"] ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-4"
      >
        <div className="accordion-panel">
          <p className="accordion-text">This app works ... </p>
        </div>
      </div>

      {/* Item 5 */}
      <h2 id="accordion-collapse-heading-5">
        <button
          type="button"
          className="accordion-button rounded-b-xl"
          onClick={() => toggleItem("accordion-collapse-body-5")}
          aria-expanded={expandedItems["accordion-collapse-body-5"]}
          aria-controls="accordion-collapse-body-5"
        >
          <span>is it free to use?</span>
          <svg
            className={`accordion-icon ${
              expandedItems["accordion-collapse-body-5"] ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-5"
        className={`accordion-content ${
          expandedItems["accordion-collapse-body-5"] ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="accordion-panel">
          <p className="accordion-text">This app works ... </p>
        </div>
      </div>
    </div>
  );
};

