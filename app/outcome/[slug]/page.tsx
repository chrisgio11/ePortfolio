"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowLeft, PenLine, FileSearch, Lightbulb, FileText, Palette, FileType, Zap } from "lucide-react"

const learningOutcomes = {
  "generating-inquiry": {
    id: 1,
    title: "Generating Inquiry",
    description:
      "Students will be able to generate and explore genuine lines of inquiry related to writing, language, literacy, and/or rhetoric.",
    icon: <Lightbulb className="h-8 w-8" />,
    detailedDescription:
      "This outcome is about learning how to ask thought provoking questions and explore topics that matter to me. It helped me figure out what I'm interested in when it comes to writing, language, and communication, and how to dig deeper by doing research and thinking critically.",
    skills: [
      "Formulating research questions that drive meaningful inquiry",
      "Identifying gaps in existing knowledge or discourse",
      "Exploring connections between different areas of writing and rhetoric",
      "Developing curiosity about language and communication",
      "Pursuing lines of inquiry that lead to deeper understanding",
    ],
    assignments: [
      {
        title: "NWWK Quiz",
        artifactUrl: "/artifacts/nwwk-quiz.pdf",
        reflection: "In the NWWK quiz, I generated and explored lines of inquiry by engaging with the idea that writing is not just a tool but a subject of study. I began this exploration by reading key texts that challenged my earlier understanding of writing as a fixed skill and encouraged me to view it as a dynamic, context-driven activity. My process involved reflecting on how rhetorical thinking, audience awareness, and genre all contribute to the act of writing. Through the quiz responses, I questioned assumptions about writing's role in society and its undervaluation in academic spaces, and I also posed questions like why writing hasn't always been treated as a field of research. From this, I learned that research is an evolving, curiosity-driven process rather than a straightforward path to proving a thesis. My goal was to better understand how writing works in real-world and academic contexts, and I feel this assignment exceeded my expectations by deepening my awareness of writing as both process and subject. In the future, I will use this insight to approach research and writing tasks more flexibly and critically, knowing that good writing stems from inquiry, not just information gathering."
      },
      {
        title: "Primary Source Analysis",
        artifactUrl: "/artifacts/PrimarySourceAnalysis.png",
        reflection: "In my U.S. History class, I explored lines of inquiry by analyzing political cartoons about immigration during the Gilded Age. I was curious about how media shaped public views on immigrants and what messages these cartoons were trying to communicate. My process involved closely examining both visuals and captions from sources like The Immigrant and Which Color, then connecting them to the themes we discussed in class, like nativism and exclusion laws. From this, I learned how powerful language and imagery can be in shaping public opinion, especially in political contexts. My main goal for the assignment was to better understand how historical sources reflect rhetorical strategies, and I think I accomplished that. This met my expectations of ENC 1102 by pushing me to think more critically about how arguments are made,not just in writing, but in visuals too. I know I'll use this type of analysis in the future when evaluating sources or breaking down messages in both academic and real-world contexts."
      },
    ],
  },
  "multiple-ways-writing": {
    id: 2,
    title: "Multiple ways of writing",
    description:
      "Students will be able to purposefully integrate multimodality, multiple languages, and/or multiliteracies into writing products to support their goals.",
    icon: <Palette className="h-8 w-8" />,
    detailedDescription:
      "This outcome taught me how writing isn't just about words on a page. I learned how to mix in things like images, sounds, and even different languages to get my message across better and connect with different kinds of people.",
    skills: [
      "Combining textual and visual elements effectively",
      "Integrating multiple languages or dialects when appropriate",
      "Adapting writing style for different media platforms",
      "Understanding how different modes of communication affect meaning",
      "Selecting appropriate communication strategies for specific goals",
    ],
    assignments: [
      {
        title: "NWWK Quiz",
        artifactUrl: "/artifacts/nwwk-quiz.pdf",
        reflection:
          "Multimodality refers to using a combination of different modes, like visual, textual, audio, and spatial, to communicate ideas effectively. In the NWWK quiz, I used multiple literacies by interpreting scholarly readings, analyzing rhetorical concepts, and composing thoughtful responses in writing that engaged critically with the material. These tasks required not just reading comprehension but also the ability to synthesize ideas and express them in clear written form, which aligns with digital and academic literacies. Through this process, I learned that writing is more than just words, it's about using the right tools and forms to make meaning, especially when navigating complex ideas like the rhetorical situation or writing as inquiry. This experience exceeded my expectations for ENC 1102, as it expanded my view of writing to include how purpose and audience shape communication. Going forward, I'll apply this understanding by thinking more flexibly about how to communicate ideas in different formats, whether in future classes or professional contexts.",
      },
      {
        title: "Humanities Portfolio Project",
        artifactUrl: "/artifacts/HumanitiesPortfolio.pdf",
        reflection: "In my Humanities project, I explored the environmental art of Chris Jordan and used both visuals and written analysis to communicate my message more effectively. I intentionally chose to include high-resolution, zoomed-in versions of Jordan's artworks, such as his plastic cup composition and the lighter-filled Starry Night, to emphasize the overwhelming scale of environmental waste. This supported my personal writing goal: to help readers not just understand, but actually feel the urgency of these issues. I also engaged with digital literacy by sourcing and crediting Creative Commons images responsibly. These visual choices weren't just added at the end, they shaped how I structured the project, from planning to final draft. I realized that multimodal writing allowed me to combine emotion with data, and that changed how I think about composing for an audience. In future projects, especially presentations or research with public-facing goals, I'll continue using multiple forms of communication to reach people more effectively."
      },
    ],
  },
  "information-literacy": {
    id: 3,
    title: "Information Literacy",
    description:
      "Students will be able to evaluate and act on criteria for relevance, credibility, and ethics when gathering, analyzing, and presenting primary and secondary source materials.",
    icon: <FileSearch className="h-8 w-8" />,
    detailedDescription:
      "This outcome helped me get better at finding and using reliable sources. I learned how to tell if information is trustworthy, why it matters to use it ethically, and how to present it clearly in my own work.",
    skills: [
      "Evaluating source credibility and authority",
      "Assessing relevance of sources to research questions",
      "Understanding ethical considerations in research",
      "Distinguishing between different types of sources",
      "Presenting information accurately and responsibly",
    ],
    assignments: [
      {
        title: "CRAAP Test",
        artifactUrl: "/artifacts/CRAAP_Test.docx",
        reflection:
          "In completing the C.R.A.A.P. Test assignment, I had to carefully evaluate multiple sources using specific criteria such as relevance, accuracy, and authority. I did this by closely analyzing peer-reviewed articles about language, writing, rhetoric, and literacy, topics that aligned with my research interests. This helped me act on important standards when gathering and interpreting both primary and secondary sources. I identified credibility by checking for author qualifications, scholarly publication outlets, and cited evidence within each article. I also reflected on how timely each source was and whether its purpose was biased or informative. Identifying patterns like reliability and scholarly intent was often easier in secondary sources, as they tend to be well-organized and backed by other research. From this assignment, I learned how to apply a structured evaluation method to research materials, which made me more confident in choosing trustworthy sources. It exceeded my expectations for ENC 1102 because it gave me a practical framework for analyzing information, not just absorbing it. In the future, I'll use this process to assess source quality in both academic and professional settings, ensuring that my work is supported by reliable evidence.",
      },
      {
        title: "Show Paper",
        artifactUrl: "/artifacts/FinalShowPaper.pdf",
        reflection: "For the Show Paper, I had to evaluate a primary source, the video of the performance, by paying close attention to its relevance to course themes and its effectiveness as a piece of theatre. I considered elements like the actors' delivery, set design, and overall audience reaction to decide what was most credible and meaningful to include. While the performance served as a rich primary source, I also referenced secondary materials like lecture notes and course readings to give my analysis more context. It was definitely easier to evaluate patterns and meaning from the primary experience because I was directly immersed in it, but the secondary sources helped solidify my understanding. I learned how important it is to critically assess both direct experiences and supporting materials when making claims in writing. This process went beyond my expectations for ENC 1102, as it made me think more deeply about how to responsibly and ethically present observations. I can see myself applying this in the future when writing reviews, reports, or even professional analyses that require balancing personal insights with researched information."
      },
    ],
  },
  "research-genre-production": {
    id: 4,
    title: "Research Genre Production",
    description:
      "Students will be able to produce writing that demonstrates their ability to navigate choices and constraints in a variety of public and/or academic research genres that matter to specific communities.",
    icon: <FileType className="h-8 w-8" />,
    detailedDescription:
      "This outcome helped me understand how different types of research writing work. I learned how to adjust my writing depending on the audience, whether it's for a school paper or something more public, and how to follow the rules for each type.",
    skills: [
      "Identifying conventions of different research genres",
      "Adapting writing style to meet genre expectations",
      "Understanding audience needs in different research contexts",
      "Making strategic choices within genre constraints",
      "Recognizing how genres function in specific communities",
    ],
    assignments: [
      {
        title: "CRAAP Test",
        artifactUrl: "/artifacts/CRAAP_Test.docx",
        reflection:
          "For the C.R.A.A.P. Test assignment, I had to identify the constraints of writing in a critical evaluation genre intended for an academic audience, specifically within the context of ENC 1102. The purpose was not to argue a point, but rather to assess sources objectively using set criteria: Currency, Relevance, Authority, Accuracy, and Purpose. I learned how genres come with their own expectations, such as structure, tone, and formatting, and how understanding these constraints helps tailor my work to a specific academic community. To meet the assignment's requirements, I made deliberate choices like using third-person analysis, focusing on measurable criteria, and avoiding personal opinion unless explicitly allowed. These decisions were shaped by the intended audience (my professor and peers) and the purpose (evaluating source credibility). From this, I learned how to adapt my writing to different genres and rhetorical situations by observing conventions and using them effectively. The assignment definitely exceeded my expectations of ENC 1102 by pushing me to think about how genre influences research and presentation. In the future, I'll apply this genre awareness when writing in different disciplines or professional settings, knowing how to shape my content and tone for maximum relevance and clarity.",
      },
      {
        title: "Cache Simulator Report",
        artifactUrl: "/artifacts/CacheSimReport.pdf",
        reflection: "The \"Cache Simulator Report\" aligns well with the Research Genre Production learning outcome, as it required navigating multiple writing constraints tied to genre, audience, and purpose. Because this was a technical report written for a computer architecture course, the genre called for formal academic language, structured sections, detailed analysis, and the integration of code-based and simulation results. Our team had to make decisions about how to present complex performance data in a digestible way for readers familiar with computer systems, such as using graphs, system architecture diagrams, and metric explanations to support our claims. \n\nFrom this experience, I learned how to communicate findings in a way that was both technical and accessible, which is essential in STEM fields. I also learned that writing for a technical audience means making choices about precision, clarity, and what background information is assumed. To meet genre expectations, we included sections like Implementation, Evaluation, and Summary, mirroring what's common in industry white papers or academic reports. This assignment exceeded my expectations for ENC 1102 in terms of how much crossover it had with my major. It helped me realize that research-based writing isn't just for English classes, it's a key skill in engineering too. I'll definitely use this in the future when writing technical documentation or research-based project reports in both academic and professional settings."
      },
    ],
  },
  "contributing-knowledge": {
    id: 5,
    title: "Contributing Knowledge",
    description:
      "Students will be able to draw conclusions based on analysis and interpretation of primary evidence and place that work in conversation with other source materials.",
    icon: <Zap className="h-8 w-8" />,
    detailedDescription:
      "This outcome is about being able to look at your own research and actually say something meaningful with it. For my paper, I had to collect data, figure out what it meant, and then connect it to what other researchers were saying. It taught me how to build on what's already out there and add my own voice to the conversation.",
    skills: [
      "Analyzing primary evidence systematically",
      "Drawing well-supported conclusions from evidence",
      "Connecting original analysis to existing scholarship",
      "Participating in scholarly conversations",
      "Articulating the significance of research findings",
    ],
    assignments: [
      {
        title: "Major Assignment 1",
        artifactUrl: "/artifacts/MA1.pdf",
        reflection: "In Major Assignment 1, I engaged with the \"Contributing Knowledge\" outcome by creating and refining research questions that aim to generate new insights into how course modality affects students' ability to develop rhetorical awareness. I designed a survey to collect primary evidence from UCF students who took ENC 1101 or ENC 1102 in either online or face-to-face formats. My goal was to analyze how modality shapes students' understanding of audience, purpose, and context, all of which are key components of rhetorical awareness. What makes this more than just a class project is that the findings could actually contribute to the broader discussion about how writing should be taught across different learning environments. Outside of academics, this experience made me more attentive to how different situations influence communication, which is something I now notice in daily interactions, group projects, and even social media posts."
      },
      {
        title: "Primary Source Analysis",
        artifactUrl: "/artifacts/PrimarySourceAnalysis.png",
        reflection: "In my US History class, I completed a Primary Source Analysis where I examined political cartoons like \"The Immigrant: The Stranger at Our Gate\" and \"Which Color is to be Tabooed Next?\" This assignment helped me practice drawing conclusions from primary sources by analyzing visual rhetoric and connecting it to historical context. I had to interpret not only the images but also the tone, symbolism, and message behind them, especially how they reflected attitudes about immigration during the Gilded Age. This pushed me to think critically about how visuals and text work together to make an argument, much like in ENC 1102. The process helped me better understand how to evaluate and engage with different types of sources, and I know this skill will help me in other research-based writing tasks in the future."
      },
    ],
  },
  revision: {
    id: 6,
    title: "Revision",
    description:
      "Students will be able to negotiate differences in and act with intention on feedback from readers when drafting, revising, and editing their writing.",
    icon: <PenLine className="h-8 w-8" />,
    detailedDescription:
      "This outcome is all about learning how to take feedback and actually use it to make your writing better. I've learned that revision isn't just about fixing grammar, it's about making real changes to improve clarity, structure, and meaning. Whether it's from a peer, a professor, or my own second look, I've gotten better at rethinking my work and making intentional edits that strengthen what I'm trying to say.",
    skills: [
      "Receiving feedback constructively",
      "Evaluating different types of reader responses",
      "Making strategic decisions about revision priorities",
      "Implementing substantive changes to improve clarity and effectiveness",
      "Developing a personal revision process",
    ],
    assignments: [
      {
        title: "Major Assignment 1",
        artifactUrl: "/artifacts/MA1.pdf",
        reflection: "Major Assignment 1 required me to engage deeply with revision, especially when it came to refining my research questions and methods. Early drafts of my research plan were too broad, and through feedback from my instructor and my own reflections, I narrowed the focus to something more manageable and specific. For example, I revised the number of survey participants and the types of questions used, balancing what I wanted to learn with what was realistic given the time constraints. This showed me that revision isn't just about fixing grammar or rewording, it's about making strategic decisions that improve clarity and purpose. I've started to apply this mindset outside the classroom too, especially when I'm editing resumes, coding, or explaining technical concepts to others. It's helped me see revision as a tool for better communication, not just better writing."
      },
      {
        title: "Equifax Breach Research Paper",
        artifactUrl: "/artifacts/EquifaxBreach.pdf",
        reflection: "While working on the cybersecurity paper about the Equifax breach, I negotiated differences in my writing based on peer and instructor feedback. For example, my peer noted that some of my technical descriptions were too dense, and my instructor suggested that I reorganize a few paragraphs for better flow. I revised by simplifying the explanations and improving transitions to guide the reader more clearly through the timeline of the breach. This taught me that revision isn't just about fixing surface errors, it's about shaping the paper for clarity, tone, and audience. I realized that I often assume too much background knowledge from the reader, and I've learned to be more intentional about accessibility. These revisions exceeded my expectations for ENC1102 by showing me how audience-centered writing and revision improve both the message and the impact. In the future, I'll apply this to any technical or academic writing where clarity and precision are critical."
      },
    ],
  },
}

export default function OutcomePage() {
  const params = useParams()
  const slug = params.slug as string
  const outcome = learningOutcomes[slug as keyof typeof learningOutcomes]

  if (!outcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Outcome Not Found</h1>
          <Link href="/">
            <Button className="bg-cyan-600 hover:bg-cyan-700">Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">ENC 1102 ePortfolio</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl">
              <div className="text-cyan-400">{outcome.icon}</div>
            </div>
          </div>
          <Badge className="mb-4 bg-gray-800 text-cyan-300 border-gray-700">Learning Outcome {outcome.id}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{outcome.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed">{outcome.description}</p>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-gray-700 bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed text-lg">{outcome.detailedDescription}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Assignments and Reflections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Artifacts</h2>
          <div className="space-y-8">
            {outcome.assignments.map((assignment, index) => (
              <Card key={index} className="border border-gray-700 bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-cyan-400 mt-1" />
                    <div>
                      <CardTitle className="text-xl text-white">{assignment.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-cyan-500">
                    <h4 className="text-cyan-400 font-semibold mb-2">
                      <a
                        href={assignment.artifactUrl}
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-4 w-4" />
                        <span>View Artifact</span>
                      </a>
                    </h4>
                    {assignment.reflection
                      .split("\n\n")
                      .map((para, i) => (
                        <p key={i} className="text-gray-300 italic mt-2">
                          {para}
                        </p>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Other Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other Learning Outcomes</h2>
          <Link href="/#outcomes">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white"
            >
              View All Outcomes
            </Button>
          </Link>
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
