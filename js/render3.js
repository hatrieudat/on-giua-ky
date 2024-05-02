import { idx_3 } from './midterm.js';
import { generateUniqueRandomNumbers } from './utils.js';
const renderQuests = () => {
  const test = generateUniqueRandomNumbers(0, idx_3.questions.length - 1, 30);
  const quets = test.map((item, index) => {
    const ans = generateUniqueRandomNumbers(0, 3, 4);
    const quest = idx_3.questions[item];
    return `
      <div class="pb-3 lh-sm fs-5">
        <div style="white-space: pre-line">${index + 1}. ${quest.q}</div>
        <div class="row py-2">
          <div class="col">A. ${quest.o[ans[0]]}</div>
          <div class="col">B. ${quest.o[ans[1]]}</div>
          <div class="col">C. ${quest.o[ans[2]]}</div>
          <div class="col">D. ${quest.o[ans[3]]}</div>
        </div>
      </div>
    `;
  });

  return quets.join(' ');
};

const render3 = `
  <p class="fw-bold fs-4 text-decoration-underline">
    III. Choose the word or phrase that best fits the blank space in each sentence
  </p>
  ${renderQuests()}
`;

export default render3;
