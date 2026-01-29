export type Category = 'phrasal verbs' | 'slang words';

export interface VocabularyItem {
  id: string;
  word_or_phrase: string;
  meaning: string;
  example_sentence: string;
  category: Category;
  difficulty: 'beginner' | 'intermediate';
}

export const VOCABULARY: VocabularyItem[] = [
  // Phrasal Verbs
  {
    id: 'pv-001',
    word_or_phrase: 'Get along',
    meaning: 'To have a harmonious or friendly relationship.',
    example_sentence: 'They seem to get along really well despite their differences.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-002',
    word_or_phrase: 'Look forward to',
    meaning: 'To feel excited about something that is going to happen.',
    example_sentence: "I'm looking forward to our vacation next month.",
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-003',
    word_or_phrase: 'Break down',
    meaning: 'To stop working (usually a machine or vehicle).',
    example_sentence: 'The car broke down on the way to the airport.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-004',
    word_or_phrase: 'Call off',
    meaning: 'To cancel something that was planned.',
    example_sentence: 'They had to call off the meeting because the CEO was ill.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  // Slang Words
  {
    id: 'sl-001',
    word_or_phrase: 'Cap',
    meaning: 'A lie or something that is not true.',
    example_sentence: '"I just ran a marathon in 2 hours." "That\'s cap!"',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-002',
    word_or_phrase: 'Ghost',
    meaning: 'To suddenly stop all communication with someone.',
    example_sentence: 'I thought we had a great date, but then he ghosted me.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-003',
    word_or_phrase: 'Salty',
    meaning: 'Being upset, angry, or bitter, usually over something minor.',
    example_sentence: 'He’s still salty because he lost the game.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-004',
    word_or_phrase: 'Tea',
    meaning: 'Gossip or juicy information.',
    example_sentence: 'Come on, spill the tea! What happened at the party?',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-005',
    word_or_phrase: 'Run out of',
    meaning: 'To finish a supply of something.',
    example_sentence: 'We ran out of milk, so I need to go to the store.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-006',
    word_or_phrase: 'Try on',
    meaning: 'To put on clothes to see if they fit.',
    example_sentence: 'She tried on the dress before buying it.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-007',
    word_or_phrase: 'Give up',
    meaning: 'To stop doing something or stop trying.',
    example_sentence: 'Never give up on your dreams!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'sl-005',
    word_or_phrase: 'Flex',
    meaning: 'To show off or boast about something.',
    example_sentence: 'Showing off his new car was quite a flex.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-006',
    word_or_phrase: 'Sus',
    meaning: 'Short for suspicious or suspect.',
    example_sentence: 'That guy over there is acting a bit sus.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-007',
    word_or_phrase: 'Extra',
    meaning: 'Being over the top or dramatic.',
    example_sentence: 'She was being so extra about the tiny stain on her shirt.',
    category: 'slang words',
    difficulty: 'beginner'
  }
];
// ... more items will be added to reach 500
