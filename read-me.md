# 🏔️ Everest Framework

<div align="center">

![BXOk3WaO_400x400](https://github.com/user-attachments/assets/735be061-69f5-4cb8-9296-df250f2b808a)



**Master the art of wilderness exploration**

[![NPM Version](https://img.shields.io/npm/v/@everest/core?color=blue)](https://www.npmjs.com/package/@everest/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[Getting Started](#getting-started) • 
[Documentation](#documentation) • 
[Examples](#examples) • 
[Contributing](#contributing)

</div>

## ✨ Features

- 🎯 **Dynamic Path Finding** - Advanced algorithms create personalized journeys
- 📈 **Character Progression** - Rich character development system
- 🌐 **Real-time Events** - Dynamic weather and environmental challenges
- 🔄 **State Management** - Seamless React integration with custom hooks
- 📱 **Cross-platform** - Works on web, mobile, and desktop
- 🤖 **AI Integration** - Powered by OpenAI for dynamic storytelling

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn
- OpenAI API key

### Installation

```bash
# Using npm
npm install @everest/core @everest/react

# Using yarn
yarn add @everest/core @everest/react
```

### Quick Start

```typescript
import { EverestClient } from '@everest/core';
import { EverestProvider } from '@everest/react';

const everest = new EverestClient({
  openAiKey: process.env.VITE_OPENAI_API_KEY,
  options: {
    model: 'gpt-3.5-turbo',
    temperature: 0.7
  }
});

function App() {
  return (
    <EverestProvider client={everest}>
      <YourAdventureApp />
    </EverestProvider>
  );
}
```

## 📖 Documentation

### Character System

Create dynamic characters with unique attributes:

```typescript
const character = {
  name: "Rowan Pathfinder",
  role: "Mountain Guide",
  house: "Rangers",
  stats: {
    strength: 7,
    stamina: 8,
    wisdom: 8,
    charisma: 5,
    agility: 8
  }
};
```

### Adventure Components

Build interactive adventure interfaces:

```typescript
function AdventureView({ character }) {
  const { messages, choices, selectChoice } = useAdventure(character);

  return (
    <div className="adventure-container">
      <MessageList messages={messages} />
      <ChoiceSelector 
        choices={choices}
        onSelect={selectChoice}
      />
    </div>
  );
}
```

### Progress Tracking

Monitor character growth and achievements:

```typescript
function ProgressTracker({ characterId }) {
  const { 
    level, 
    experience, 
    achievements 
  } = useCharacterProgress(characterId);

  return (
    <StatsDisplay
      level={level}
      experience={experience}
      achievements={achievements}
    />
  );
}
```

## 🎮 Examples

Find complete example applications in the [examples](./examples) directory:

- Basic Adventure App
- Character Creation System
- Custom Journey Builder
- Progress Tracking Dashboard

## 🛠️ Advanced Usage

### Custom Environments

Create specialized journey settings:

```typescript
const customEnvironment = {
  location: 'The Misty Peaks',
  weather: 'Approaching Storm',
  difficulty: 'extreme',
  theme: 'survival'
};
```

### Event System

Subscribe to real-time events:

```typescript
everest.onJourneyProgress((event) => {
  console.log('Journey update:', event.content);
});

everest.onNaturalEvent((event) => {
  console.log('Weather change:', event.type);
});
```

## 📁 Project Structure

```
everest/
├── packages/
│   ├── core/               # Core framework
│   └── react/             # React integration
├── examples/              # Example projects
├── docs/                  # Documentation
└── tests/                # Test suites
```

## 🤝 Contributing

We love your input! Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/everest.git

# Install dependencies
cd everest
npm install

# Start development
npm run dev
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments

- OpenAI for providing GPT models
- Our amazing community of contributors
- All adventurers using Everest in their projects

---

<div align="center">

Made with ❤️ by the Everest Team

[Website](https://everestlabs.io) • 
[Documentation](https://everestlabs.io) • 
[Twitter](https://x.com/everestintel)

</div>
