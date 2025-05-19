"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInvitation } from "@/context/invitation-context"
import { Loader2 } from "lucide-react"

export default function InvitationCodeForm() {
  const [code, setCode] = useState("")
  const { validateInvitationCode, isLoading, error } = useInvitation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!code.trim()) {
      return
    }

    await validateInvitationCode(code)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full p-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-800 mb-2">Mati & Ro</h1>
          <p className="text-xl text-gray-600">Boda 2025</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
              Código de invitación
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
              placeholder="Ingresa tu código de invitación"
              disabled={isLoading}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-rose-300 text-gray-800 px-6 py-3 uppercase tracking-wider text-sm hover:bg-rose-400 transition-colors disabled:opacity-70 flex justify-center items-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={16} />
                Verificando...
              </>
            ) : (
              "Ver invitación"
            )}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Si no tienes un código de invitación, por favor contacta a los novios.
        </p>
      </motion.div>
    </div>
  )
}
