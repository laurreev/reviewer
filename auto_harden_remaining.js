const fs = require('fs');

function hardenDistractor(text, category) {
  // Lowercase the first letter so it flows naturally into the prefix
  let modifiedText = text.trim();
  if (modifiedText.length > 0) {
    modifiedText = modifiedText.charAt(0).toLowerCase() + modifiedText.slice(1);
  }
  // Remove trailing periods
  if (modifiedText.endsWith('.')) {
    modifiedText = modifiedText.slice(0, -1);
  }

  const isLaw = category.includes('Law') || category.includes('Statutory');

  const lawPrefixes = [
    "A rigid statutory DOLE regulation explicitly mandating ",
    "The absolute constitutional principle concerning ",
    "A highly contentious Supreme Court jurisprudence involving ",
    "The strict legal prohibition against ",
    "An outdated provision of the Labor Code requiring ",
    "The mandatory administrative DOLE order dictating ",
    "An absolute requirement under the Civil Code regarding "
  ];

  const lawSuffixes = [
    ", under severe penalty of immediate corporate closure.",
    ", which is absolutely void ab initio due to contrary public policy.",
    ", explicitly exempting all managerial and supervisory employees.",
    ", strictly enforceable only during a declared state of national economic crisis.",
    ", carrying a mandatory non-bailable criminal liability for the corporate officers.",
    ", unconditionally subjecting the employer to massive punitive damages.",
    ", stripping the employee of absolutely all statutory monetary claims."
  ];

  const hrPrefixes = [
    "A strictly mandated corporate policy involving ",
    "The highly controversial HR framework of ",
    "An exclusive executive-level methodology regarding ",
    "A specialized administrative procedure focused on ",
    "The rigorous quantitative psychological assessment of ",
    "An advanced organizational development strategy utilizing ",
    "The highly theoretical management approach of "
  ];

  const hrSuffixes = [
    ", utilized strictly for C-suite and executive performance metrics.",
    ", which completely bypasses standard operational DOLE regulations.",
    ", designed explicitly to rapidly retrench chronically underperforming staff.",
    ", applicable exclusively to massive multinational PEZA-registered entities.",
    ", theoretically eliminating absolutely all inherent cognitive biases.",
    ", heavily criticized for significantly eroding long-term employee morale.",
    ", requiring highly expensive proprietary software algorithms to implement."
  ];

  const prefixes = isLaw ? lawPrefixes : hrPrefixes;
  const suffixes = isLaw ? lawSuffixes : hrSuffixes;

  // Simple deterministic pseudo-random selection based on string length to ensure consistency
  const prefixIndex = text.length % prefixes.length;
  const suffixIndex = (text.length * 3) % suffixes.length;

  return `${prefixes[prefixIndex]}${modifiedText}${suffixes[suffixIndex]}`;
}

function run() {
  const file = 'src/data/questionBank.ts';
  let content = fs.readFileSync(file, 'utf8');

  // Regex to match individual question objects
  // It looks for { id: '...', ..., incorrectAnswers: [ ... ] }
  const questionRegex = /\{\s*id:\s*'([ab])(\d+)'[\s\S]*?category:\s*'([^']+)'[\s\S]*?incorrectAnswers:\s*\[([\s\S]*?)\]\s*,\s*rationale:/g;

  let updateCount = 0;

  content = content.replace(questionRegex, (match, setStr, idNumStr, category, answersBlock) => {
    const idNum = parseInt(idNumStr, 10);
    
    // We only process if id > 105 for A, and id > 103 for B
    if ((setStr === 'a' && idNum >= 106) || (setStr === 'b' && idNum >= 104)) {
      
      // Parse the old answers block. It usually looks like:
      // 'Answer 1.',
      // 'Answer 2.',
      // 'Answer 3.'
      
      // Extract the string literals
      const stringLiteralRegex = /'([^'\\]*(?:\\.[^'\\]*)*)'/g;
      let oldAnswers = [];
      let m;
      while ((m = stringLiteralRegex.exec(answersBlock)) !== null) {
        oldAnswers.push(m[1].replace(/\\'/g, "'"));
      }

      if (oldAnswers.length === 3) {
        const newAnswers = oldAnswers.map(ans => hardenDistractor(ans, category));
        const replacementBlock = newAnswers.map(a => `\n      '${a.replace(/'/g, "\\'")}'`).join(',') + '\n    ';
        
        updateCount++;
        // Replace just the incorrectAnswers array inside the original match string
        const innerRegex = /(incorrectAnswers:\s*\[)([\s\S]*?)(\]\s*,\s*rationale:)/;
        return match.replace(innerRegex, `$1${replacementBlock}$3`);
      }
    }
    return match;
  });

  fs.writeFileSync(file, content);
  console.log(`Successfully auto-hardened ${updateCount} remaining questions using algorithmic complexity injection.`);
}

run();
