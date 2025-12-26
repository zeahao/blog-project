import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  SparklesIcon, 
  BookOpenIcon, 
  UserIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

const Home: React.FC = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: '粒子特效',
      description: '炫酷的粒子背景效果，让您的博客更具科技感'
    },
    {
      icon: BookOpenIcon,
      title: '优质内容',
      description: '分享技术见解、生活感悟和创意想法'
    },
    {
      icon: UserIcon,
      title: '个人品牌',
      description: '打造独特的个人技术博客品牌'
    }
  ]

  const recentPosts = [
    {
      id: 1,
      title: 'React 18 新特性详解',
      excerpt: '深入了解React 18带来的并发渲染、自动批处理等新特性...',
      date: '2024-01-15',
      readTime: '5分钟'
    },
    {
      id: 2,
      title: 'TypeScript 最佳实践',
      excerpt: '分享在大型项目中使用TypeScript的经验和最佳实践...',
      date: '2024-01-12',
      readTime: '8分钟'
    },
    {
      id: 3,
      title: '前端性能优化指南',
      excerpt: '从代码层面到架构设计，全面提升前端应用性能...',
      date: '2024-01-10',
      readTime: '10分钟'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">欢迎来到我的博客</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              分享技术见解，记录成长历程，探索无限可能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                开始阅读
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3 glass-card text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                了解更多
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="gradient-text">博客特色</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="gradient-text">最新文章</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:bg-white/5 transition-all duration-300"
              >
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-8 py-3 glass-card text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              查看所有文章
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home