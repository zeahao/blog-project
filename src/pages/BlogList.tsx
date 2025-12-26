import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CalendarIcon, ClockIcon, TagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  author: string
  category: string
}

const BlogList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('all')

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'React 18 新特性详解',
      excerpt: '深入了解React 18带来的并发渲染、自动批处理、Suspense改进等新特性，以及如何在项目中正确使用这些功能。',
      content: 'React 18 是React的最新主要版本，引入了许多激动人心的新特性...',
      date: '2024-01-15',
      readTime: '5分钟',
      tags: ['React', 'JavaScript', '前端框架'],
      author: '技术小白',
      category: '前端开发'
    },
    {
      id: 2,
      title: 'TypeScript 最佳实践',
      excerpt: '分享在大型项目中使用TypeScript的经验和最佳实践，包括类型设计、项目配置、代码组织等方面的技巧。',
      content: 'TypeScript已经成为现代前端开发的标准配置...',
      date: '2024-01-12',
      readTime: '8分钟',
      tags: ['TypeScript', 'JavaScript', '类型系统'],
      author: '技术小白',
      category: '编程语言'
    },
    {
      id: 3,
      title: '前端性能优化指南',
      excerpt: '从代码层面到架构设计，全面提升前端应用性能。包括加载优化、渲染优化、网络优化等多个维度。',
      content: '性能优化是前端开发中的重要课题...',
      date: '2024-01-10',
      readTime: '10分钟',
      tags: ['性能优化', '前端', '用户体验'],
      author: '技术小白',
      category: '性能优化'
    },
    {
      id: 4,
      title: 'Vue 3 Composition API 深入解析',
      excerpt: '深入理解Vue 3的Composition API，掌握setup函数、响应式系统、生命周期等核心概念。',
      content: 'Vue 3 引入了Composition API，这是一个革命性的改变...',
      date: '2024-01-08',
      readTime: '7分钟',
      tags: ['Vue', 'Composition API', '前端框架'],
      author: '技术小白',
      category: '前端开发'
    },
    {
      id: 5,
      title: 'CSS Grid 布局完全指南',
      excerpt: '全面解析CSS Grid布局系统，从基础概念到高级应用，助你成为Grid布局专家。',
      content: 'CSS Grid是现代Web布局的强大工具...',
      date: '2024-01-05',
      readTime: '6分钟',
      tags: ['CSS', '布局', 'Grid'],
      author: '技术小白',
      category: 'CSS'
    },
    {
      id: 6,
      title: 'Node.js 微服务架构实践',
      excerpt: '分享使用Node.js构建微服务架构的实践经验，包括服务拆分、通信机制、监控等方面。',
      content: '微服务架构已经成为现代应用开发的主流选择...',
      date: '2024-01-03',
      readTime: '12分钟',
      tags: ['Node.js', '微服务', '后端架构'],
      author: '技术小白',
      category: '后端开发'
    }
  ]

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">博客文章</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            分享技术见解，记录成长历程
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索文章..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-card bg-white/10 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedTag === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'glass-card text-gray-300 hover:bg-white/20'
              }`}
            >
              全部
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-blue-500 text-white'
                    : 'glass-card text-gray-300 hover:bg-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover:bg-white/5 transition-all duration-300 group"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full mb-2">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-xs text-gray-400"
                    >
                      <TagIcon className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-gray-500">{post.author}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              没有找到匹配的文章
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BlogList