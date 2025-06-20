"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, User, PenLine, FileSearch, Lightbulb, ArrowRight, Palette, FileType, Zap, FileText } from "lucide-react"
import Link from "next/link"

const learningOutcomes = [
  {
    id: 1,
    title: "Generating Inquiry",
    description:
      "Students will be able to generate and explore genuine lines of inquiry related to writing, language, literacy, and/or rhetoric.",
    icon: <Lightbulb className="h-6 w-6" />,
    slug: "generating-inquiry",
  },
  {
    id: 2,
    title: "Multiple ways of writing",
    description:
      "Students will be able to purposefully integrate multimodality, multiple languages, and/or multiliteracies into writing products to support their goals.",
    icon: <Palette className="h-6 w-6" />,
    slug: "multiple-ways-writing",
  },
  {
    id: 3,
    title: "Information Literacy",
    description:
      "Students will be able to evaluate and act on criteria for relevance, credibility, and ethics when gathering, analyzing, and presenting primary and secondary source materials.",
    icon: <FileSearch className="h-6 w-6" />,
    slug: "information-literacy",
  },
  {
    id: 4,
    title: "Research Genre Production",
    description:
      "Students will be able to produce writing that demonstrates their ability to navigate choices and constraints in a variety of public and/or academic research genres that matter to specific communities.",
    icon: <FileType className="h-6 w-6" />,
    slug: "research-genre-production",
  },
  {
    id: 5,
    title: "Contributing Knowledge",
    description:
      "Students will be able to draw conclusions based on analysis and interpretation of primary evidence and place that work in conversation with other source materials.",
    icon: <Zap className="h-6 w-6" />,
    slug: "contributing-knowledge",
  },
  {
    id: 6,
    title: "Revision",
    description:
      "Students will be able to negotiate differences in and act with intention on feedback from readers when drafting, revising, and editing their writing.",
    icon: <PenLine className="h-6 w-6" />,
    slug: "revision",
  },
]

export default function EPortfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate offset for sticky navigation (adjust 80px based on your nav height)
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">ENC 1102 ePortfolio</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Button
                variant={activeSection === "home" ? "default" : "ghost"}
                onClick={() => scrollToSection("home")}
                className={
                  activeSection === "home"
                    ? "bg-cyan-600 hover:bg-cyan-700"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                Home
              </Button>
              <Button
                variant={activeSection === "outcomes" ? "default" : "ghost"}
                onClick={() => scrollToSection("outcomes")}
                className={
                  activeSection === "outcomes"
                    ? "bg-cyan-600 hover:bg-cyan-700"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                Learning Outcomes
              </Button>
              <Button
                variant={activeSection === "assignments" ? "default" : "ghost"}
                onClick={() => scrollToSection("assignments")}
                className={
                  activeSection === "assignments"
                    ? "bg-cyan-600 hover:bg-cyan-700"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                Major Assignments
              </Button>
              <Button
                variant={activeSection === "about" ? "default" : "ghost"}
                onClick={() => scrollToSection("about")}
                className={
                  activeSection === "about"
                    ? "bg-cyan-600 hover:bg-cyan-700"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }
              >
                About Me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My ENC 1102
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}
                ePortfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Welcome to my digital portfolio showcasing my journey through English Composition II. This collection
              demonstrates my growth in critical thinking, research, and academic writing.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-gray-800 text-cyan-300 border-gray-700">
              Academic Writing
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-gray-800 text-cyan-300 border-gray-700">
              Critical Analysis
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-gray-800 text-cyan-300 border-gray-700">
              Research Skills
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-gray-800 text-cyan-300 border-gray-700">
              Reflection
            </Badge>
          </div>
          <Button
            size="lg"
            onClick={() => scrollToSection("outcomes")}
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white"
          >
            Explore Learning Outcomes
          </Button>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section id="outcomes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ENC 1102 Learning Outcomes</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              These six learning outcomes form the foundation of my academic growth throughout this course. Each outcome
              represents a key skill developed through various assignments and reflective practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningOutcomes.map((outcome, index) => (
              <Link key={outcome.id} href={`/outcome/${outcome.slug}`}>
                <Card className="group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700 bg-gray-800/80 backdrop-blur-sm cursor-pointer h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-lg group-hover:from-cyan-800/50 group-hover:to-purple-800/50 transition-colors">
                        <div className="text-cyan-400 group-hover:text-cyan-300">{outcome.icon}</div>
                      </div>
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        Outcome {outcome.id}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {outcome.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <CardDescription className="text-gray-300 leading-relaxed mb-4">
                      {outcome.description}
                    </CardDescription>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Explore this outcome</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Major Assignments Section */}
      <section id="assignments" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Major Writing Assignments</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A comprehensive collection of my major writing assignments, including multiple drafts, feedback received, 
              and reflections on the writing process and revisions made throughout the semester.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/major-assignment-1">
              <Card className="border border-gray-700 bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-lg group-hover:from-cyan-800/50 group-hover:to-purple-800/50 transition-colors">
                      <FileText className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300" />
                    </div>
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      Research Proposal
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">Major Assignment 1</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-gray-300 leading-relaxed mb-4">
                  This research proposal outlines my plan to study how different course modalities, online versus face-to-face, affect students’ rhetorical awareness in writing. It establishes the foundation for the larger project developed in Major Assignment 2.
                  </CardDescription>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">View the proposal</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/major-assignment-2">
              <Card className="border border-gray-700 bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-lg group-hover:from-cyan-800/50 group-hover:to-purple-800/50 transition-colors">
                      <FileText className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300" />
                    </div>
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      Research Paper
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">Major Assignment 2</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-gray-300 leading-relaxed mb-4">
                  This paper analyzes how course modality affects rhetorical awareness. I developed it through multiple drafts and feedback, which helped shape a clearer, more effective final argument.
                  </CardDescription>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Multiple drafts included</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <div 
              onClick={() => scrollToSection("home")}
              className="cursor-pointer"
            >
              <Card className="border border-gray-700 bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-lg group-hover:from-cyan-800/50 group-hover:to-purple-800/50 transition-colors">
                      <FileText className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300" />
                    </div>
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      ePortfolio
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">Major Assignment 3</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-gray-300 leading-relaxed mb-4">
                    This website itself serves as Major Assignment 3, a comprehensive digital portfolio showcasing 
                    my academic growth and learning outcomes throughout the semester.
                  </CardDescription>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">View my portfolio</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          </div>

          <Card className="border border-gray-700 bg-gray-800/80 backdrop-blur-sm shadow-2xl shadow-cyan-500/10">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg mx-auto md:mx-0">
                    <img
                      src="/me.png"
                      alt="Christian Giovannetti"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">Christian Giovannetti</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                  Hi, I'm Christian, a Computer Science major with a Mathematics minor at the University of Central Florida. Throughout my time at UCF, I've worked as a Learning Assistant for Calculus I and as a Teaching Assistant for Object-Oriented Programming. These experiences have strengthened both my technical and communication skills, and I'm always looking for new ways to grow as a learner and educator.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                  My academic interests include artificial intelligence, machine learning, and software development. I'm particularly interested in how these fields can be used to solve real-world problems and improve people's lives. I'm also passionate about using writing as a tool for communication, analysis, and personal growth. This ePortfolio represents my journey through the learning outcomes and showcases the skills I have developed throughout the semester.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <Badge className="bg-cyan-900/50 text-cyan-300 hover:bg-cyan-800/50 border-cyan-700">
                      Academic Writing
                    </Badge>
                    <Badge className="bg-purple-900/50 text-purple-300 hover:bg-purple-800/50 border-purple-700">
                      Research
                    </Badge>
                    <Badge className="bg-green-900/50 text-green-300 hover:bg-green-800/50 border-green-700">
                      Critical Thinking
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-semibold">ENC 1102 ePortfolio</span>
          </div>
          <p className="text-gray-400 mb-4">A digital showcase of academic growth and learning outcomes</p>
          <p className="text-sm text-gray-500">Created as part of Professor Mainer's English Composition II course</p>
        </div>
      </footer>
    </div>
  )
}
