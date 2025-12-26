import React from 'react'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  AcademicCapIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const About: React.FC = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Vue.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'CSS/Tailwind', level: 88 },
    { name: 'Python', level: 70 }
  ]

  const timeline = [
    {
      year: '2024',
      title: '全栈开发工程师',
      description: '专注于现代Web技术栈，参与大型项目开发'
    },
    {
      year: '2023',
      title: '前端技术负责人',
      description: '负责团队技术选型和架构设计'
    },
    {
      year: '2022',
      title: '高级前端开发',
      description: '深入学习React生态系统和性能优化'
    },
    {
      year: '2021',
      title: '前端开发工程师',
      description: '开始职业生涯，专注于React开发'
    }
  ]

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">关于我</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            热爱技术，专注于Web开发，致力于创建优质的用户体验
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">你好，我是技术小白</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                我是一名充满激情的全栈开发工程师，拥有多年的Web开发经验。我热爱探索新技术，
                享受解决复杂问题的过程，并且始终保持学习的态度。
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                这个博客是我分享技术见解、记录学习历程和交流思想的地方。我希望通过我的文章，
                能够帮助更多的开发者成长，同时也与大家一起探讨技术的未来。
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center px-4 py-2 glass-card text-gray-300 hover:text-white transition-all duration-300"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  联系我
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 glass-card text-gray-300 hover:text-white transition-all duration-300"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 glass-card text-gray-300 hover:text-white transition-all duration-300"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                  Twitter
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-6xl font-bold">TB</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            <span className="gradient-text">技术栈</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            <span className="gradient-text">职业历程</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600" />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="w-1/2" />
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10" />
                <div className="w-1/2 px-6">
                  <div className="glass-card p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-blue-400 font-bold mr-2">{item.year}</span>
                      <span className="text-white font-semibold">{item.title}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            <span className="gradient-text">价值观</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass-card p-6 text-center"
            >
              <CodeBracketIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">代码质量</h3>
              <p className="text-gray-300">
                编写清晰、可维护的代码是成为优秀开发者的基础
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-card p-6 text-center"
            >
              <AcademicCapIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">持续学习</h3>
              <p className="text-gray-300">
                技术在不断进步，保持学习的心态至关重要
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="glass-card p-6 text-center"
            >
              <RocketLaunchIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">创新精神</h3>
              <p className="text-gray-300">
                勇于尝试新技术，追求更好的解决方案
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About