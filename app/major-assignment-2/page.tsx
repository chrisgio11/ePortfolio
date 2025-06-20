"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen, 
  FileText, 
  Download
} from "lucide-react"
import Link from "next/link"

const assignmentData = {
  title: "Modality and Rhetorical Awareness",
  subtitle: "Major Assignment 2",
  description: "A comparative research project analyzing how online and face-to-face writing courses impact students’ development of rhetorical awareness, based on scholarly sources and original student survey data.",
  course: "ENC 1102",
  date: "June 2025",
  outcomes: ["Generating Inquiry", "Multiple ways of writing"],
  wordCount: "1,800 words",
  speechAnalyzed: "2024 State of the Union Address",
  multimodalElements: ["Text analysis", "Visual aids", "Audio clips", "Infographics"],
  drafts: [
    {
      name: "Draft 1",
      description: "Preliminary rhetorical analysis comparing rhetorical development in online and in-person learning environments",
      date: "June 6, 2025",
      link: "/artifacts/MA2.pdf",
      feedback: "This first draft explores how course modality, online versus in-person, impacts students’ ability to develop rhetorical awareness in first-year writing. Drawing on survey data and scholarly sources, the draft outlines key themes such as peer feedback, instructor engagement, and reflective writing. This version laid the groundwork for later drafts, which added more specific evidence and analysis to strengthen the claims.",
      improvements: "Enhanced analysis of speaker's background and historical context, improved integration of visual and audio elements, strengthened connections between different rhetorical strategies."
    },
    {
      name: "Feedback on Draft 1", 
      description: "Feedback emphasized organizational clarity, MLA formatting, and more effective use of multimodal sources.",
      date: "June 10, 2025",
      link: "/artifacts/MA2feedback.pdf",
      feedback: "The feedback on my first draft from Professor Mainer helped me recognize areas where my structure and organization needed improvement, especially in clearly separating sections like the introduction, methodology, and analysis. I also learned that proper MLA formatting, particularly in the works cited and image references, was essential for clarity and credibility. Additionally, I was reminded of the importance of thoroughly analyzing and connecting secondary sources to my main argument. Moving forward, I’ll focus on refining how I integrate sources and visuals to make my claims more persuasive and better supported."
    },
    {
      name: "Final Draft",
      description: "Comparative analysis of writing course modalities and their effects on rhetorical awareness",
      date: "June 11, 2025",
      link: "/artifacts/MA2final.pdf",
      feedback: "This final paper explores how different course modalities, online vs. face-to-face, impact students’ development of rhetorical awareness. Drawing on original survey research from UCF first-year writing students, it analyzes how peer interaction, instructor feedback, and synchronous vs. asynchronous learning affect rhetorical growth. Feedback from the first draft guided the revision process, helping improve the integration of multimodal elements and deepening the rhetorical analysis. These changes strengthened the overall argument and led to a more cohesive, insightful final product.",
      improvements: "Final polish on transitions, enhanced introduction with compelling hook, refined conclusion with broader implications for understanding political rhetoric, improved formatting and presentation of multimodal elements."
    }
  ],
  reflection: "This research project offered me the opportunity to explore how course delivery, online vs. face-to-face, impacts the development of rhetorical awareness in first-year writing students. I chose to investigate this topic because I noticed that many of my own writing experiences differed significantly depending on whether the class was in-person or online. I wanted to know if other students had similar experiences, and whether modality truly shapes how we learn rhetorical concepts like audience, purpose, and voice. \n\nTo answer this, I combined existing scholarship with original research. I read academic articles by Gray, Docktor and Borgman, and others, which helped frame my understanding of how instructional design affects rhetorical development. Then I gathered student perspectives through a structured survey and used thematic coding to analyze responses. That process taught me a lot about balancing qualitative research with personal insight. I learned how to identify patterns, translate them into themes, and support my conclusions using both data and established literature. \n\nThe most valuable insight I gained was that rhetorical awareness doesn't develop in a vacuum, it's highly influenced by the interaction structures in a course. Students in face-to-face classes repeatedly mentioned how real-time discussions and peer feedback helped sharpen their audience awareness. Online students, by contrast, often felt isolated, emphasizing the need for stronger instructor presence and better feedback systems. That finding was striking and echoed much of the existing research I reviewed. \n\nLooking back, this project exceeded my expectations for ENC 1102. I not only engaged deeply with scholarly work but also practiced meaningful primary research, which isn't something I expected to do in a composition class. Moving forward, I plan to carry these skills with me, especially the ability to think critically about how context and modality shape writing. Whether I'm in a future class, presenting at a conference, or working in a technical setting, understanding how to assess audience needs in different environments will be crucial.",
  keyLearning: [
    "How to analyze rhetorical strategies across multiple modes",
    "The importance of considering audience and context in analysis",
    "How to integrate visual and textual evidence effectively",
    "The value of multimodal composition in academic writing",
    "How to structure complex analysis with clear organization"
  ]
}

export default function MajorAssignment2() {
  const [activeTab, setActiveTab] = useState("drafts")

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
            <div className="flex space-x-4">
              <Link href="/">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 border-cyan-600 text-cyan-400">
              {assignmentData.subtitle}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {assignmentData.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
              {assignmentData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-700 mb-8">
              <TabsTrigger value="drafts" className="data-[state=active]:bg-cyan-600">Drafts and Feedback</TabsTrigger>
              <TabsTrigger value="reflection" className="data-[state=active]:bg-cyan-600">Reflection</TabsTrigger>
            </TabsList>

            <TabsContent value="drafts" className="space-y-8">
              {assignmentData.drafts.map((draft, index) => (
                <Card key={index} className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-2xl">{draft.name}</CardTitle>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {draft.date}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300 text-lg">
                      {draft.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      {/* <div className="flex items-center space-x-2 mb-3">
                        <Download className="h-5 w-5 text-cyan-400" />
                        <h4 className="text-lg font-semibold text-white">Download Document</h4>
                      </div> */}
                      <a 
                        href={draft.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FileText className="h-4 w-4" />
                        <span>View {draft.name}</span>
                      </a>
                    </div>
                    
                    <div>
                      {/* <h4 className="text-lg font-semibold text-white mb-3">Feedback</h4> */}
                      <p className="text-gray-300 leading-relaxed">
                        {draft.feedback}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="reflection" className="space-y-8">
              <Card className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Reflection on the Writing Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    {assignmentData.reflection
                      .split("\n\n")
                      .map((para, i) => (
                        <p key={i} className="text-gray-300 leading-relaxed text-lg mb-4">
                          {para}
                        </p>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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