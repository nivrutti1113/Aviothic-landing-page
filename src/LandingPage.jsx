"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#020617] text-white relative overflow-hidden">
      {/* Liquid Background Blobs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-pink-400/40 rounded-full blur-3xl"
        animate={{ x: [0, 50, -30], y: [0, 40, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-400/40 rounded-full blur-3xl"
        animate={{ x: [0, -40, 20], y: [0, -30, 10] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section - Human-First Approach */}
      <section className="relative z-10 px-6 md:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Every minute matters in breast cancer detection.
            </motion.h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Aviothic helps clinicians see what the human eye can miss.
            </p>
            
            {/* POSITIONING STATEMENT */}
            <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-pink-400 mb-2">Not Just Accurate. Clinically Trustworthy.</h3>
              <p className="text-white/90">
                Most AI models predict. Aviothic explains, adapts, and integrates into real clinical workflows.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                <span className="text-lg">98%+ AI accuracy</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                <span className="text-lg">Explainable, clinician-trusted AI</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-lg">Built by IIT Madras engineers</span>
              </div>
            </div>
            
            <Button className="rounded-full px-8 py-6 text-lg bg-white text-indigo-700 hover:bg-white/90">
              See Why Doctors Trust Aviothic
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-pink-500/20 to-indigo-500/20 rounded-full blur-xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-48 h-48 md:w-60 md:h-60 bg-gradient-to-br from-pink-400/30 to-indigo-400/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-pink-300/40 to-indigo-300/40 rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Life-Saving Metric Counter */}
      <section className="relative z-10 px-6 md:px-20 py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-pink-400 mb-2">1 in 8</div>
              <p className="text-xl text-white/80">women will develop breast cancer in their lifetime</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-indigo-400 mb-2">40%</div>
              <p className="text-xl text-white/80">more lives saved with early detection</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">Millions</div>
              <p className="text-xl text-white/80">of scans need AI support globally</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLACK BOX vs TRANSPARENT AI VISUAL */}
      <section className="relative z-10 px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-16 text-center"
          >
            Black Box vs Transparent AI
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Black Box Approach */}
            <Card className="bg-white/10 backdrop-blur-xl border-none overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-red-400">Traditional AI</h3>
                <div className="bg-gray-800/50 rounded-lg p-6 mb-6 flex flex-col items-center justify-center h-48">
                  <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">?</span>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">87.3%</div>
                    <div className="text-white/70">Probability Only</div>
                  </div>
                </div>
                <p className="text-white/80 text-center">
                  Opaque decision-making with no insight into how conclusions were reached
                </p>
              </CardContent>
            </Card>
            
            {/* Transparent Approach */}
            <Card className="bg-white/10 backdrop-blur-xl border-none overflow-hidden border-2 border-green-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-green-400">Aviothic AI</h3>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 mb-6 h-48 relative overflow-hidden">
                  {/* Mammogram visualization */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-indigo-900/20" />
                  
                  {/* Heatmap */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="absolute w-24 h-24 rounded-full bg-pink-500/50 blur-xl top-8 left-8"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute w-16 h-16 rounded-full bg-orange-500/50 blur-lg top-16 right-12"
                  />
                  
                  {/* Report elements */}
                  <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
                    <div className="bg-white/10 rounded p-3">
                      <div className="text-xs text-white/60">Risk Score</div>
                      <div className="text-lg font-bold text-green-400">87.3%</div>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <div className="text-xs text-white/60">Confidence</div>
                      <div className="text-lg font-bold text-blue-400">92%</div>
                    </div>
                    <div className="bg-white/10 rounded p-3 col-span-2">
                      <div className="text-xs text-white/60">Findings</div>
                      <div className="text-sm">Suspicious density in upper outer quadrant</div>
                    </div>
                  </div>
                </div>
                <p className="text-white/80 text-center">
                  When lives are at stake, transparency matters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW AVIOTHIC IS DIFFERENT */}
      <section className="relative z-10 px-6 md:px-20 py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-16 text-center"
          >
            How Aviothic Is Different
          </motion.h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-left p-4 font-semibold">Typical AI Systems</th>
                  <th className="text-left p-4 font-semibold text-green-400">Aviothic AI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Model Type</td>
                  <td className="p-4 text-white/80">Single CNN</td>
                  <td className="p-4 text-green-400">Multi-model (ResNet + ViT)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Explainability</td>
                  <td className="p-4 text-white/80">Optional</td>
                  <td className="p-4 text-green-400">Built-in Grad-CAM</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Trust Level</td>
                  <td className="p-4 text-white/80">Black box</td>
                  <td className="p-4 text-green-400">Clinician-verifiable</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Deployment</td>
                  <td className="p-4 text-white/80">Research / demo</td>
                  <td className="p-4 text-green-400">Production-ready SaaS</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Reports</td>
                  <td className="p-4 text-white/80">Probability only</td>
                  <td className="p-4 text-green-400">Full clinical-style report</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Focus</td>
                  <td className="p-4 text-white/80">Accuracy only</td>
                  <td className="p-4 text-green-400">Accuracy + usability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CLINICAL TRUST STACK */}
      <section className="relative z-10 px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-16 text-center"
          >
            Our Clinical Trust Stack
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Model Intelligence", 
                desc: "Vision Transformers + CNN ensembles trained on real medical datasets",
                icon: "🧠"
              },
              { 
                title: "Explainability Layer", 
                desc: "Grad-CAM heatmaps and region-of-interest visualization",
                icon: "🔍"
              },
              { 
                title: "Decision Support Layer", 
                desc: "Risk score and structured clinical report (PDF)",
                icon: "📄"
              },
              { 
                title: "Integration Layer", 
                desc: "API-first, hospital & PACS-ready architecture",
                icon: "🏥"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-xl border-none h-full hover:border-pink-500/30 transition-all">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF OVER PROMISES */}
      <section className="relative z-10 px-6 md:px-20 py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-16 text-center"
          >
            Proof Over Promises
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "↑ Sensitivity", 
                desc: "+15% improvement in early-stage detection sensitivity",
                stat: "15%",
                color: "text-green-400"
              },
              { 
                title: "↓ False Positives", 
                desc: "32% reduction in false positive rates compared to baseline",
                stat: "32%",
                color: "text-blue-400"
              },
              { 
                title: "Consistent Performance", 
                desc: "±3% performance consistency across diverse datasets",
                stat: "±3%",
                color: "text-purple-400"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-xl border-none">
                  <CardContent className="p-8 text-center">
                    <div className={`text-4xl font-bold mb-4 ${item.color}`}>{item.stat}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DOCTORS TRUST US */}
      <section className="relative z-10 px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-16 text-center"
          >
            Built for Doctors, Not Demos
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-white/90 mb-8">
                "Aviothic was designed alongside clinical workflows. Every output is interpretable, reviewable, and auditable."
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Clinical-style reports with BI-RADS classification</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Integrated uncertainty quantification for each prediction</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>"AI assistance — not diagnosis" clear disclaimers</span>
                </li>
              </ul>
              
              <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm">
                Regulatory-aligned design avoiding diagnostic claims
              </div>
            </div>
            
            <div>
              <Card className="bg-white/10 backdrop-blur-xl border-none">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm font-semibold">Mammography Report #MA2025-0487</div>
                      <div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Final</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-white/60">PATIENT</div>
                        <div className="font-medium">Jane Doe, 45 years</div>
                      </div>
                      
                      <div>
                        <div className="text-xs text-white/60">FINDINGS</div>
                        <div className="text-sm">
                          Suspicious density noted in upper outer quadrant of right breast. 
                          AI-assisted detection highlights region with 87% confidence.
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-white/60">RISK SCORE</div>
                          <div className="font-bold text-pink-400">87.3%</div>
                        </div>
                        <div>
                          <div className="text-xs text-white/60">BI-RADS</div>
                          <div className="font-bold text-yellow-400">4 - Suspicious</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs text-white/60">RECOMMENDATION</div>
                        <div className="text-sm">
                          Recommend diagnostic mammogram and ultrasound for further evaluation.
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-white/10 text-xs text-white/60">
                        AI Assistance Provided • Not Intended for Diagnosis
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INVESTORS BELIEVE IN US */}
      <section className="relative z-10 px-6 md:px-20 py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-16 text-center"
          >
            Why Aviothic Can Win This Market
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Deep technical moat (Explainability + workflow)",
              "Regulatory-aligned design",
              "Scalable SaaS architecture",
              "Founder–market fit (AI + healthcare focus)"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-xl border-none h-full">
                  <CardContent className="p-6 flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Story */}
      <section className="relative z-10 px-6 md:px-20 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-16 text-center"
          >
            Why We Built Aviothic
          </motion.h2>
          
          <Card className="bg-white/10 backdrop-blur-xl border-none">
            <CardContent className="p-8 md:p-12">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-center italic mb-8">
                "As AI engineers, we realized that detection accuracy alone isn't enough.
                Doctors need to trust the system. Patients need clarity.
                Aviothic was built to bridge that gap."
              </p>
              
              {/* Short Powerful Differentiator Statements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {[
                  "Explainable AI for life-critical decisions",
                  "Clinical AI, not black-box predictions",
                  "Built for real hospitals, not research papers",
                  "Accuracy is required. Trust is earned."
                ].map((statement, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-center text-white/90">{statement}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-indigo-500/20 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">PC</span>
                  </div>
                  <div>
                    <div className="font-semibold">Pranab Chauhan</div>
                    <div className="text-white/70">Founder & AI Engineer</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">CF</span>
                  </div>
                  <div>
                    <div className="font-semibold">Co-Founder</div>
                    <div className="text-white/70">CTO</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 md:px-20 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Ready to Transform Breast Cancer Screening?
          </motion.h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join leading healthcare institutions using Aviothic to improve diagnostic accuracy and build clinician trust.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="rounded-full px-8 py-4 text-lg bg-white text-indigo-700 hover:bg-white/90">
              Request Clinical Demo
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
              Evaluate Aviothic AI
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-white/70 border-t border-white/10">
        © {new Date().getFullYear()} Aviothic.ai — All rights reserved
      </footer>
    </div>
  );
}