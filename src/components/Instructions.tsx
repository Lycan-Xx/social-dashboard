import { Copy, Check } from "lucide-react";
import { useState } from "react";

const defaultPromptText = `Make this site neon-themed. Rebuild the color palette for brighter colors. Use more color. Add animation to the background gradient in the hero component.

====== DO NOT CHANGE BELOW THIS LINE FOR SUBMISSION ======

Change the heading to "Done!" and the subheading to "I've completed the NTL DEPLOY challenge!"

Update the prompt in the share buttons at the bottom to include the URL to this site on a newline.
`;

export default function Instructions() {
  const [copied, setCopied] = useState(false);
  const [promptText, setPromptText] = useState(defaultPromptText);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const scrollToShare = () => {
    document.getElementById("share")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="instructions"
      className="min-h-screen flex items-center justify-center px-6 bg-neutral-900 text-white"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
            Deploy Challenge
          </h2>
          <p className="text-lg font-text text-neutral-300 mb-8 max-w-2xl mx-auto">
            Complete this challenge in 3 simple steps to claim your prize!
          </p>
        </div>

        {/* Step 1: Deploy to Netlify */}
        <div className="mb-12 p-6 bg-neutral-800 border border-neutral-700 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex-shrink-0 w-8 h-8 bg-teal-400 text-neutral-900 rounded-full flex items-center justify-center font-bold text-sm">
              1
            </span>
            <h3 className="text-xl font-display font-semibold text-white">
              Deploy this site to Netlify
            </h3>
          </div>
          <p className="text-neutral-300 mb-6 ml-11">
            Click the button below to deploy this challenge site to your Netlify account. This will create a new site with all the files needed for the challenge.
          </p>
          <div className="ml-11">
            <a
              href="https://app.netlify.com/start/deploy?zip=https://ntl-deploy-challenge.netlify.app/ntl-deploy-challenge.zip"
              target="_blank"
              rel="noopener noreferrer"              
              className="bg-teal-400 hover:bg-teal-300 text-neutral-900 font-display font-semibold text-lg px-8 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              
              Deploy to Netlify
            </a>
            
          </div>
        </div>

        {/* Step 2: Agent Runners */}
        <div className="mb-8 p-6 bg-neutral-800 border border-neutral-700 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex-shrink-0 w-8 h-8 bg-teal-400 text-neutral-900 rounded-full flex items-center justify-center font-bold text-sm">
              2
            </span>
            <h3 className="text-xl font-display font-semibold text-white">
              Run Agent Runners on your deployed site
            </h3>
          </div>
          <p className="text-neutral-300 mb-6 ml-11">
            Once your site is deployed, use Agent Runners to run the following prompt on your live site. <strong>You can customize the content above the divider</strong> - the content below should remain unchanged for the challenge to work properly.
          </p>

          {/* Editable Prompt Textarea */}
          <div className="relative ml-11">
            <button
              onClick={copyToClipboard}
              className="absolute top-4 right-4 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors duration-200 flex items-center gap-2 cursor-pointer z-10"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green-400" />
                  <span className="text-sm text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-neutral-300" />
                  <span className="text-sm text-neutral-300">Copy</span>
                </>
              )}
            </button>

            <textarea
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              className="w-full h-48 p-6 pr-20 bg-neutral-700 border border-neutral-600 rounded-lg font-mono text-sm text-neutral-100 leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              placeholder="Edit the prompt here..."
            />
          </div>
        </div>

        {/* Step 3: Share Your Success */}
        <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex-shrink-0 w-8 h-8 bg-teal-400 text-neutral-900 rounded-full flex items-center justify-center font-bold text-sm">
              3
            </span>
            <h3 className="text-xl font-display font-semibold text-white">
              Share your success
            </h3>
          </div>
          <p className="text-neutral-300 mb-6 ml-11">
            When Agent Runners completes the transformation, deploy your updated site and share your success!
          </p>

          <div className="ml-11">
            <button
              onClick={scrollToShare}
              className="bg-teal-400 hover:bg-teal-300 text-neutral-900 font-display font-semibold text-lg px-8 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              Complete Challenge
              <svg
                className="w-4 h-4 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
