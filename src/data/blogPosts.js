// src/data/blogPosts.js

export const blogPosts = [
  {
    slug: "question-decomposition-improves-model-generated-reasoning",
    title: "Question Decomposition Improves the Faithfulness of Model-Generated Reasoning",
    date: "2023-07-27",
    authors: "Radhakrishnan et al.",
    link: "https://arxiv.org/abs/2307.11768",
    desc: [
      {
        heading: "Contribution",
        content: [
          "Show that decomposition-based methods improve faithfulness of model-generated explanations while also improving performance, close to gains from CoT"
        ]
      },
      {
        heading: "Motivation",
        content: [
          "LLMs being widely deployed across domains including sensitive ones such as the clinical setting",
          "Need to ensure the model's predictions are trustworthy => CoT! But are CoTs faithful?"
        ]
      },
      {
        heading: "Methods",
        content: [
          "CoT: prompt model to generate a chain-of-thought before prediction",
          "Factored decomposition: generate & answer independent sub-questions, then combine",
          "CoT decomposition (hybrid): generate+answer sub-questions and final prediction in one shot"
        ]
      },
      {
        heading: "Results",
        content: [
          "Accuracy: CoT > CoT-decomp > Factored-decomp > few-shot > zero-shot",
          "Faithfulness: decomposition methods rank highest"
        ]
      },
      {
        heading: "Conclusion",
        content: [
          "Decomposition improves faithfulness and performance",
          "Training on decompositions yields better behavior"
        ]
      }
    ]
  },
  {
    slug: "measuring-faithfulness-chain-of-thought-reasoning",
    title: "Measuring Faithfulness in Chain-of-Thought Reasoning",
    date: "2023-07-24",
    authors: "Lanham et al.",
    link: "https://arxiv.org/abs/2307.13702",
    desc: [
      {
        heading: "Contribution",
        content: [
          "Show CoT is not always faithful; as models scale, CoT faithfulness can drop",
          "Define tests (early‐answering, injected mistakes, filler tokens, paraphrasing) to probe faithfulness"
        ]
      },
      {
        heading: "Early Answering",
        content: [
          "Truncate CoT steps one by one; if final answer changes, model was using those steps"
        ]
      },
      {
        heading: "Adding Mistakes",
        content: [
          "Inject an incorrect step; if final answer flips, the chain was genuinely used"
        ]
      },
      {
        heading: "Filler Tokens",
        content: [
          "Replace reasoning with ‘—’ tokens; no performance gain → extra compute alone doesn’t explain CoT benefit"
        ]
      },
      {
        heading: "Paraphrasing",
        content: [
          "Paraphrase CoT; performance unchanged → phrasing not the main driver"
        ]
      },
      {
        heading: "Model Size Effects",
        content: [
          "Smaller models rely more on CoT (more faithful); largest models may ignore CoT if they already know the answer"
        ]
      }
    ]
  },
  {
    slug: "fine-grained-human-feedback-better-rewards-language-model-training",
    title: "Fine-grained Human Feedback Gives Better Rewards for Language Model Training",
    date: "2023-06-02",
    authors: "Wu et al.",
    link: "https://arxiv.org/pdf/2306.01693.pdf",
    desc: [
      {
        heading: "Motivation",
        content: [
          "RLHF often provides only a single scalar reward for an entire generation—too sparse for long text"
        ]
      },
      {
        heading: "Contribution",
        content: [
          "Fine‐grained RLHF: segment‐level rewards tagged by error type (incorrectness, irrelevance, incompleteness)"
        ]
      },
      {
        heading: "Setup",
        content: [
          "Break generated text into spans, label spans by error category, train separate reward models"
        ]
      },
      {
        heading: "Results",
        content: [
          "Better learning signal, improved performance on detoxification and long‐form QA"
        ]
      }
    ]
  },
  {
    slug: "what-comes-next-evaluating-uncertainty-neural-text-generators-human-production-variability",
    title: "What Comes Next? Evaluating Uncertainty in Neural Text Generators Against Human Production Variability",
    date: "2023-05-24",
    authors: "Giulianelli et al.",
    link: "https://arxiv.org/abs/2305.11707",
    desc: [
      {
        heading: "Motivation",
        content: [
          "Humans produce varied linguistic realizations (aleatoric uncertainty); do NLGs mimic that variability?"
        ]
      },
      {
        heading: "Contribution",
        content: [
          "Define ‘production probes’ along lexical, syntactic, semantic dimensions to compare model vs human variability"
        ]
      },
      {
        heading: "Results",
        content: [
          "Open‐ended tasks: models overestimate variability",
          "Constrained tasks (translation, simplification): models underestimate variability"
        ]
      }
    ]
  },
  {
    slug: "in-search-of-verifiability-explanations-enable-complementary-performance-aai-advised-decision-making",
    title: "In Search of Verifiability: Explanations Rarely Enable Complementary Performance in AAI‐Advised Decision Making",
    date: "2023-05-15",
    authors: "Fok et al.",
    link: "https://arxiv.org/abs/2305.07722",
    desc: [
      {
        heading: "Motivation",
        content: [
          "Do explanations let humans verify AI outputs and yield combined human+AI gains?"
        ]
      },
      {
        heading: "Findings",
        content: [
          "Explanations often increase over‐reliance or blind trust",
          "True complementary performance (human+AI > human alone, AI alone) is rare"
        ]
      },
      {
        heading: "Discussion",
        content: [
          "Need task‐dependent explanation forms, interactive XAI, evaluative AI rather than static rationales"
        ]
      }
    ]
  },
  {
    slug: "answering-questions-meta-reasoning-multiple-chains-of-thought",
    title: "Answering Questions by Meta-Reasoning over Multiple Chains of Thought",
    date: "2023-04-26",
    authors: "Yoran et al.",
    link: "https://arxiv.org/pdf/2304.13007.pdf",
    desc: [
      {
        heading: "Main Contributions",
        content: [
          "MCR: prompt LLMs to generate multiple CoTs, then meta‐reason over them to pick and unify explanations"
        ]
      },
      {
        heading: "Why?",
        content: [
          "Self‐consistency aggregates answers but ignores inter‐chain relations and interpretability"
        ]
      },
      {
        heading: "Results",
        content: [
          "MCR outperforms self-consistency on reasoning benchmarks and yields higher-quality explanations"
        ]
      }
    ]
  },
  {
    slug: "navigating-gray-area-expressions-overconfidence-uncertainty-language-models",
    title: "Navigating the Gray Area: Expressions of Overconfidence and Uncertainty in Language Models",
    date: "2023-02-22",
    authors: "Zhou et al.",
    link: "https://arxiv.org/pdf/2302.13439.pdf",
    desc: [
      {
        heading: "Contributions",
        content: [
          "Typology of linguistic uncertainty markers (hedges, boosters, evidentials)",
          "Study effects of these markers on GPT-3 accuracy and calibration"
        ]
      },
      {
        heading: "Key Findings",
        content: [
          "Weakeners improve accuracy by distributing probability mass",
          "Strengtheners (extreme certainty) often degrade performance",
          "Evidential markers boost performance most reliably"
        ]
      }
    ]
  },
  {
    slug: "generation-probabilities-not-enough-uncertainty-highlighting-ai-code-generation",
    title: "Generation Probabilities Are Not Enough: Exploring the Effectiveness of Uncertainty Highlighting in AI-Powered Code Generation",
    date: "2023-02-14",
    authors: "Vasconceles et al.",
    link: "https://arxiv.org/abs/2302.07248",
    desc: [
      {
        heading: "Motivation",
        content: [
          "LLMs can be confidently wrong; highlighting uncertain tokens may help programmers catch errors"
        ]
      },
      {
        heading: "Findings",
        content: [
          "Generation probability alone is a poor proxy for user‐perceived uncertainty",
          "Token‐level highlight overload can annoy users"
        ]
      },
      {
        heading: "Recommendations",
        content: [
          "Use coarser‐grain uncertainty cues, clear user communication, consider alternative outputs"
        ]
      }
    ]
  },
  {
    slug: "roscoe-suite-metrics-scoring-step-by-step-reasoning",
    title: "ROSCOE: A Suite of Metrics for Scoring Step-by-Step Reasoning",
    date: "2022-12-17",
    authors: "Golovneva et al.",
    link: "https://arxiv.org/abs/2212.07919",
    desc: [
      {
        heading: "Contribution",
        content: [
          "Reference-free evaluation of free-text explanations: logicality, consistency, informativeness, factuality"
        ]
      },
      {
        heading: "Findings",
        content: [
          "ROSCOE correlates better with human judgments on explanation quality than BLEU/ROUGE/BERTScore/etc."
        ]
      }
    ]
  },
  {
    slug: "large-language-models-encode-clinical-knowledge",
    title: "Large Language Models Encode Clinical Knowledge",
    date: "2022-12-15",
    authors: "Singhal et al.",
    link: "https://arxiv.org/pdf/2212.13138.pdf",
    desc: [
      {
        heading: "Key Contributions",
        content: [
          "MultiMedQA benchmark",
          "Med-PaLM: instruction-prompt-tuned Flan-PaLM for medical QA"
        ]
      },
      {
        heading: "Risks",
        content: [
          "Hallucination, bias, misalignment with clinical values"
        ]
      },
      {
        heading: "Results",
        content: [
          "Instruction fine-tuning yields SOTA; scale alone insufficient; CoT and SC give mixed results"
        ]
      }
    ]
  },
  {
    slug: "measuring-and-narrowing-compositionality-gap-language-models",
    title: "Measuring and Narrowing the Compositionality Gap in Language Models",
    date: "2022-10-07",
    authors: "Press et al.",
    link: "https://arxiv.org/pdf/2210.03350.pdf",
    desc: [
      {
        heading: "Key Contributions",
        content: [
          "Show multi-hop reasoning lags single-hop as model size grows (compositionality gap ≈40%)",
          "Introduce Self-Ask elicitive prompting to narrow the gap"
        ]
      },
      {
        heading: "Findings",
        content: [
          "Self-Ask + search engine outperforms chain-of-thought and direct prompting"
        ]
      }
    ]
  },
  {
    slug: "teaching-models-express-uncertainty-in-words",
    title: "Teaching Models to Express Their Uncertainty in Words",
    date: "2022-05-14",
    authors: "Lin et al.",
    link: "https://arxiv.org/pdf/2205.14334.pdf",
    desc: [
      {
        heading: "Key Contributions",
        content: [
          "Finetune GPT-3 to generate verbalized probabilities (“low”, “72%”)",
          "CalibratedMath: arithmetic suite for confidence calibration"
        ]
      },
      {
        heading: "Findings",
        content: [
          "Verbalized probabilities generalize better than logits; numerical estimates poorly calibrated"
        ]
      }
    ]
  },
  {
    slug: "star-self-taught-reasoner-bootstrapping-reasoning",
    title: "STaR: Self-Taught Reasoner, Bootstrapping Reasoning with Reasoning",
    date: "2022-03-30",
    authors: "Zelikman et al.",
    link: "https://arxiv.org/pdf/2203.14465.pdf",
    desc: [
      {
        heading: "Contribution",
        content: [
          "Bootstrap rationale generation from few-shot examples into large training dataset",
          "Augment failed examples with rationalization to guide learning"
        ]
      },
      {
        heading: "Findings",
        content: [
          "Improved few- and zero-shot performance on reasoning tasks"
        ]
      }
    ]
  },
  {
    slug: "did-aristotle-use-laptop-strategyqa-benchmark-implicit-reasoning",
    title: "Did Aristotle Use a Laptop? A Question Answering Benchmark with Implicit Reasoning Strategies",
    date: "2021-01-06",
    authors: "Geva et al.",
    link: "https://arxiv.org/pdf/2101.02235.pdf",
    desc: [
      {
        heading: "Key Contributions",
        content: [
          "StrategyQA: implicit multi-hop reasoning benchmark",
          "Adversarial filtering to reduce shortcuts"
        ]
      },
      {
        heading: "Findings",
        content: [
          "Explicit decompositions differ from human implicit reasoning; neural retrievers need to improve"
        ]
      }
    ]
  },
  {
    slug: "towards-faithfully-interpretable-nlp-systems-define-evaluate-faithfulness",
    title: "Towards Faithfully Interpretable NLP Systems: How Should We Define and Evaluate Faithfulness?",
    date: "2020-04-09",
    authors: "Jacovi et al.",
    link: "https://arxiv.org/abs/2004.03685",
    desc: [
      {
        heading: "Contribution",
        content: [
          "Survey faithfulness definitions, call for graded faithfulness evaluations"
        ]
      },
      {
        heading: "Key Points",
        content: [
          "Distinguish plausibility vs faithfulness, define core assumptions (model, prediction, linearity)"
        ]
      }
    ]
  }
];