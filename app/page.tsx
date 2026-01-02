"use client"

import React, { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  Activity,
  Grid3x3,
  Wallet,
  User,
  Bell,
  Clock,
  Syringe,
  Calendar,
  Camera,
  Plus,
  ChevronRight,
  Scissors,
  Bone,
  Stethoscope,
  MapPin,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  X,
  Check,
  Loader2,
  Heart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

/**
 * IMPORTANT (Vercel):
 * - Do NOT use GitHub Pages basePath/assetPrefix here.
 * - Put your images inside /public and reference them as "/file.jpg"
 */
const basePath = "" // keep empty for Vercel

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */

type TabId = "home" | "pet-health" | "services" | "wallet" | "profile"

type Pet = {
  id: number
  name: string
  type: string
  age: string
  birthday: string
  image: string
  avatar: string
  flag: string
}

type HomeTabProps = {
  selectedPet: Pet
  setSelectedPet: React.Dispatch<React.SetStateAction<Pet>>
  pets: Pet[]
}

type PetHealthTabProps = {
  selectedPet: Pet
}

type ProfileTabProps = {
  pets: Pet[]
}

type ImageUploadModalProps = {
  profileImage: string
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
}

type ReminderModalProps = {
  selectedPet: Pet
  onClose: () => void
}

type VaccineModalProps = {
  selectedPet: Pet
  onClose: () => void
}

type AppointmentModalProps = {
  selectedPet: Pet
  onClose: () => void
}

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */

const pets: Pet[] = [
  {
    id: 1,
    name: "Demon",
    type: "Dog",
    age: "2 years",
    birthday: "9 Jun 2023",
    image: `${basePath}/cute-3d-dog-cartoon.jpg`,
    avatar: `${basePath}/cute-dog-face.jpg`,
    flag: "🇬🇧",
  },
  {
    id: 2,
    name: "Lucky",
    type: "Cat",
    age: "2 years",
    birthday: "14 May 2023",
    image: `${basePath}/cute-3d-cat-cartoon.jpg`,
    avatar: `${basePath}/cute-cat-face.png`,
    flag: "🇬🇧",
  },
  {
    id: 3,
    name: "Wing",
    type: "Bird",
    age: "1 year",
    birthday: "20 Mar 2024",
    image: `${basePath}/cute-3d-bird-cartoon.jpg`,
    avatar: `${basePath}/cute-bird-face.jpg`,
    flag: "🇬🇧",
  },
]

/* ------------------------------------------------------------------ */
/* SPLASH */
/* ------------------------------------------------------------------ */

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="mb-6"
        >
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Heart className="w-12 h-12 text-pink-500" fill="currentColor" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-white mb-2"
        >
          Paw Health
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/90 text-lg"
        >
          Your pet&apos;s wellness companion
        </motion.p>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="mt-8"
        >
          <Loader2 className="w-8 h-8 text-white animate-spin mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* MAIN PAGE */
/* ------------------------------------------------------------------ */

export default function PawHealthApp() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<TabId>("home")
  const [selectedPet, setSelectedPet] = useState<Pet>(pets[0])
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100"
      >
        {/* Floating dots (client-only) */}
        {mounted && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-300/30 rounded-full"
                animate={{
                  x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                  y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
              />
            ))}
          </div>
        )}

        {/* Main Content Container - Mobile First */}
        <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen pb-20 relative">
          <AnimatePresence mode="wait">
            {activeTab === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <HomeTab selectedPet={selectedPet} setSelectedPet={setSelectedPet} pets={pets} />
              </motion.div>
            )}

            {activeTab === "pet-health" && (
              <motion.div
                key="pet-health"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <PetHealthTab selectedPet={selectedPet} />
              </motion.div>
            )}

            {activeTab === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ServicesTab />
              </motion.div>
            )}

            {activeTab === "wallet" && (
              <motion.div
                key="wallet"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <WalletTab />
              </motion.div>
            )}

            {activeTab === "profile" && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ProfileTab pets={pets} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Navigation */}
          <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-6 py-3 flex items-center justify-around shadow-lg">
            {[
              { id: "home" as const, icon: Home, label: "Home" },
              { id: "pet-health" as const, icon: Activity, label: "Pet health" },
              { id: "services" as const, icon: Grid3x3, label: "Services" },
              { id: "wallet" as const, icon: Wallet, label: "Wallet" },
              { id: "profile" as const, icon: User, label: "Profile" },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 transition-all relative ${
                  activeTab === tab.id ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <tab.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{tab.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* HOME TAB */
/* ------------------------------------------------------------------ */

function HomeTab({ selectedPet, setSelectedPet, pets }: HomeTabProps) {
  const [showReminderModal, setShowReminderModal] = useState<boolean>(false)
  const [showVaccineModal, setShowVaccineModal] = useState<boolean>(false)
  const [showAppointmentModal, setShowAppointmentModal] = useState<boolean>(false)
  const [showImageUpload, setShowImageUpload] = useState<boolean>(false)
  const [profileImage, setProfileImage] = useState<string>(`${basePath}/diverse-group.png`)
  const [likedPets, setLikedPets] = useState<number[]>([])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      const result = reader.result
      if (typeof result === "string") {
        setProfileImage(result)
      }
      setShowImageUpload(false)
    }
    reader.readAsDataURL(file)
  }

  const toggleLike = (petId: number) => {
    setLikedPets((prev) => (prev.includes(petId) ? prev.filter((id) => id !== petId) : [...prev, petId]))
  }

  return (
    <div className="p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Avatar
                className="w-12 h-12 border-2 border-white shadow-md cursor-pointer"
                onClick={() => setShowImageUpload(true)}
              >
                <AvatarImage src={profileImage || "/placeholder.svg"} />
                <AvatarFallback>PB</AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowImageUpload(true)}
              className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 shadow-lg hover:bg-blue-600 transition-colors"
            >
              <Camera className="w-3 h-3 text-white" />
            </motion.button>
          </div>

          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.2, rotate: 180 }} whileTap={{ scale: 0.9 }}>
              <Activity className="w-5 h-5 text-gray-600 cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{ scale: 0.9 }}>
              <Grid3x3 className="w-5 h-5 text-gray-600 cursor-pointer" />
            </motion.div>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }} className="relative">
          <Bell className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
          />
        </motion.div>
      </motion.div>

      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6"
      >
        <p className="text-gray-600 text-sm mb-1">Hello, Paul</p>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          Welcome to Paw Health
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            👋
          </motion.span>
        </h1>
      </motion.div>

      {/* Pet Avatars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-4 mb-6"
      >
        {pets.map((pet: Pet, idx: number) => (
          <motion.button
            type="button"
            key={pet.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedPet(pet)}
            className={`transition-all duration-300 ${
              selectedPet.id === pet.id ? "scale-110" : "scale-100 opacity-60"
            }`}
          >
            <div className="relative">
              <Avatar className="w-16 h-16 border-4 border-white shadow-lg">
                <AvatarImage src={pet.avatar || "/placeholder.svg"} />
                <AvatarFallback>{pet.name[0]}</AvatarFallback>
              </Avatar>

              <motion.button
                type="button"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleLike(pet.id)
                }}
                className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-md"
              >
                <Heart
                  className={`w-3 h-3 ${
                    likedPets.includes(pet.id) ? "text-red-500 fill-red-500" : "text-gray-400"
                  }`}
                />
              </motion.button>

              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs font-medium bg-white px-2 py-0.5 rounded-full shadow-sm">
                {pet.name}
              </span>
            </div>
          </motion.button>
        ))}

        <motion.button
          type="button"
          whileHover={{ scale: 1.15, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center shadow-md hover:bg-blue-300 transition-colors"
        >
          <Plus className="w-8 h-8 text-blue-600" />
        </motion.button>
      </motion.div>

      {/* Pet Card */}
      <motion.div
        key={selectedPet.id}
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Card className="relative overflow-hidden bg-gradient-to-br from-blue-300 via-blue-400 to-purple-400 border-none shadow-2xl mb-6">
          <div className="p-6">
            {/* Pet Image */}
            <div className="relative mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full cursor-pointer"
              >
                <Camera className="w-5 h-5 text-white" />
              </motion.div>

              <motion.img
                key={selectedPet.id}
                initial={{ opacity: 0, y: 30, rotate: -10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                src={selectedPet.image || "/placeholder.svg"}
                alt={selectedPet.name}
                className="w-full h-48 object-contain drop-shadow-2xl"
              />
            </div>

            {/* Pet Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Avatar className="w-12 h-12 border-2 border-white shadow-lg">
                    <AvatarImage src={selectedPet.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{selectedPet.name[0]}</AvatarFallback>
                  </Avatar>
                </motion.div>

                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="text-2xl"
                >
                  {selectedPet.flag}
                </motion.span>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-gray-100">
                  Digicard <ChevronRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold text-white">{selectedPet.name}</h2>
                <Badge className="bg-white/30 text-white border-none">{selectedPet.type}</Badge>
              </div>
              <p className="text-white/90 text-sm mb-1">{selectedPet.age}</p>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <span className="text-lg">🎂</span>
                <span>{selectedPet.birthday}</span>
              </div>
            </motion.div>
          </div>

          {/* Progress Dots (FIXED TYPESCRIPT ERROR HERE) */}
          <div className="flex items-center justify-center gap-2 pb-4">
            {pets.map((pet: Pet, idx: number) => (
              <motion.div
                key={pet.id}
                animate={{
                  width: selectedPet.id === pet.id ? 32 : 8,
                  backgroundColor: selectedPet.id === pet.id ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)",
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full cursor-pointer"
                onClick={() => setSelectedPet(pet)}
              />
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-between gap-3 mb-6"
      >
        {[
          { onClick: () => setShowReminderModal(true), icon: Clock, label: "Reminder", color: "text-blue-500" },
          { onClick: () => setShowVaccineModal(true), icon: Syringe, label: "Vaccine", color: "text-purple-500" },
          {
            onClick: () => setShowAppointmentModal(true),
            icon: Calendar,
            label: "Appointment",
            color: "text-pink-500",
          },
        ].map((button, idx: number) => (
          <motion.div
            key={button.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1"
          >
            <Button
              onClick={button.onClick}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 rounded-full py-6 flex flex-col items-center gap-2 shadow-lg border border-gray-100 transition-all"
            >
              <button.icon className={`w-6 h-6 ${button.color}`} />
              <span className="text-sm font-medium">{button.label}</span>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Reminder Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 flex items-center justify-between shadow-lg">
          <div className="flex-1">
            <p className="text-sm mb-1">You have vaccine comming</p>
            <p className="text-sm font-semibold">up for Wing&apos;s on 14 Nov 2025</p>
          </div>

          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            className="bg-blue-500 p-3 rounded-full"
          >
            <Clock className="w-6 h-6 text-white" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" className="ml-3 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-full">
              Reminder
            </Button>
          </motion.div>
        </Card>
      </motion.div>

      {/* Modals */}
      <AnimatePresence>
        {showImageUpload && (
          <ImageUploadModal
            profileImage={profileImage}
            handleImageUpload={handleImageUpload}
            onClose={() => setShowImageUpload(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showReminderModal && <ReminderModal selectedPet={selectedPet} onClose={() => setShowReminderModal(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {showVaccineModal && <VaccineModal selectedPet={selectedPet} onClose={() => setShowVaccineModal(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {showAppointmentModal && (
          <AppointmentModal selectedPet={selectedPet} onClose={() => setShowAppointmentModal(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* MODALS */
/* ------------------------------------------------------------------ */

function ImageUploadModal({ profileImage, handleImageUpload, onClose }: ImageUploadModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="bg-white p-6 max-w-sm w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Update Profile Picture</h3>
            <motion.button type="button" whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={onClose}>
              <X className="w-5 h-5 text-gray-500" />
            </motion.button>
          </div>

          <div className="text-center mb-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={profileImage || "/placeholder.svg"} />
                <AvatarFallback>PB</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Done
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function ReminderModal({ selectedPet, onClose }: ReminderModalProps) {
  const [reminderType, setReminderType] = useState<"medication" | "feeding" | "exercise" | "grooming">("medication")
  const [reminderTime, setReminderTime] = useState<string>("09:00")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <Card className="bg-white p-6 max-w-sm w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Set Reminder</h3>
            <motion.button type="button" whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={onClose}>
              <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </motion.button>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">
              Pet: <span className="font-semibold text-gray-900">{selectedPet.name}</span>
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Reminder Type</label>
            <select
              value={reminderType}
              onChange={(e) => setReminderType(e.target.value as typeof reminderType)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="medication">Medication</option>
              <option value="feeding">Feeding</option>
              <option value="exercise">Exercise</option>
              <option value="grooming">Grooming</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
              <Button onClick={onClose} variant="outline" className="w-full bg-transparent">
                Cancel
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
              <Button onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                <Check className="w-4 h-4 mr-2" />
                Set Reminder
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function VaccineModal({ selectedPet, onClose }: VaccineModalProps) {
  type Vaccine = { name: string; dueDate: string; status: "upcoming" | "completed" }

  const vaccines: Vaccine[] = [
    { name: "Rabies", dueDate: "Jan 15, 2026", status: "upcoming" },
    { name: "Distemper", dueDate: "Feb 20, 2026", status: "upcoming" },
    { name: "Parvovirus", dueDate: "Completed", status: "completed" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <Card className="bg-white p-6 max-w-sm w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Vaccine Schedule</h3>
            <motion.button type="button" whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={onClose}>
              <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </motion.button>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-4">
              Pet: <span className="font-semibold text-gray-900">{selectedPet.name}</span>
            </p>
          </div>

          <motion.div className="space-y-3 mb-6">
            {vaccines.map((vaccine: Vaccine, idx: number) => (
              <motion.div
                key={`${vaccine.name}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{vaccine.name}</p>
                    <p className="text-sm text-gray-600">{vaccine.dueDate}</p>
                  </div>
                  <Badge
                    className={
                      vaccine.status === "completed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                    }
                  >
                    {vaccine.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Close
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function AppointmentModal({ selectedPet, onClose }: AppointmentModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("10:00")
  const [appointmentType, setAppointmentType] = useState<"checkup" | "vaccination" | "grooming" | "dental">("checkup")

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return { firstDay, daysInMonth }
  }

  const { firstDay, daysInMonth } = getDaysInMonth(selectedDate)

  const monthNames = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <Card className="bg-white p-6 max-w-sm w-full my-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Book Appointment</h3>
            <motion.button type="button" whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={onClose}>
              <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </motion.button>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-4">
              Pet: <span className="font-semibold text-gray-900">{selectedPet.name}</span>
            </p>
          </div>

          {/* Calendar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900">
                {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </h4>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="text-center text-xs font-semibold text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }, (_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}

              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1
                const isSelected = day === selectedDate.getDate()
                const today = new Date()
                const isToday = day === today.getDate() && selectedDate.getMonth() === today.getMonth()

                return (
                  <motion.button
                    type="button"
                    key={day}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
                    className={`aspect-square rounded-lg flex items-center justify-center text-sm transition-all ${
                      isSelected
                        ? "bg-blue-500 text-white font-bold"
                        : isToday
                          ? "bg-blue-100 text-blue-600 font-semibold"
                          : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {day}
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Type</label>
            <select
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value as typeof appointmentType)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="checkup">General Checkup</option>
              <option value="vaccination">Vaccination</option>
              <option value="grooming">Grooming</option>
              <option value="dental">Dental Care</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>

          <div className="flex gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
              <Button onClick={onClose} variant="outline" className="w-full bg-transparent">
                Cancel
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
              <Button onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                <Check className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* PET HEALTH TAB */
/* ------------------------------------------------------------------ */

function PetHealthTab({ selectedPet }: PetHealthTabProps) {
  const healthData = [
    { label: "Weight", value: "12.5 kg", icon: "⚖️", status: "Normal", progress: 75 },
    { label: "Temperature", value: "38.5°C", icon: "🌡️", status: "Normal", progress: 90 },
    { label: "Heart Rate", value: "110 bpm", icon: "❤️", status: "Healthy", progress: 85 },
  ] as const

  const upcomingAppointments = [
    { type: "Vaccination", date: "Dec 15, 2025", time: "10:00 AM" },
    { type: "Check-up", date: "Jan 05, 2026", time: "2:30 PM" },
  ] as const

  return (
    <div className="p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-900">Pet Health</h1>
        <motion.div whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}>
          <Bell className="w-6 h-6 text-gray-700" />
        </motion.div>
      </motion.div>

      {/* Selected Pet Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card className="bg-gradient-to-br from-blue-300 to-purple-400 p-4 mb-6 shadow-lg">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-white">
              <AvatarImage src={selectedPet.avatar || "/placeholder.svg"} />
              <AvatarFallback>{selectedPet.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold text-white">{selectedPet.name}</h2>
              <p className="text-white/90 text-sm">
                {selectedPet.type} • {selectedPet.age}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Health Metrics */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Health Metrics</h3>
        <motion.div className="grid gap-3">
          {healthData.map((item, idx: number) => (
            <motion.div
              key={`${item.label}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <Card className="p-4 bg-white shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: idx * 0.3 }}
                      className="text-3xl"
                    >
                      {item.icon}
                    </motion.span>
                    <div>
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      <p className="text-2xl font-bold text-blue-600">{item.value}</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-none">{item.status}</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Upcoming Appointments</h3>
        <motion.div className="space-y-3">
          {upcomingAppointments.map((appointment, idx: number) => (
            <motion.div
              key={`${appointment.type}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <Card className="p-4 bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{appointment.type}</p>
                    <p className="text-sm text-gray-600">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* PROFILE TAB */
/* ------------------------------------------------------------------ */

function ProfileTab({ pets }: ProfileTabProps) {
  const accountItems = [
    { icon: User, label: "My Profile" },
    { icon: Bell, label: "Saved" },
    { icon: Calendar, label: "Schedule" },
  ] as const

  const settingItems = [
    { icon: Bell, label: "Notification" },
    { icon: MapPin, label: "Language" },
  ] as const

  const helpItems = [{ icon: MapPin, label: "About us" }] as const

  return (
    <div className="p-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-white shadow-lg">
            <AvatarImage src={`${basePath}/diverse-person-smiling.png`} />
            <AvatarFallback>PB</AvatarFallback>
          </Avatar>
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Paul Bailey</h2>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 mb-4">
            New pet parent
          </Button>
        </motion.div>

        {/* Pet Avatars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3"
        >
          {pets.map((pet: Pet, idx: number) => (
            <motion.div
              key={pet.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center"
            >
              <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                <AvatarImage src={pet.avatar || "/placeholder.svg"} />
                <AvatarFallback>{pet.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-gray-600 mt-1">{pet.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* My Account Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-6"
      >
        <h3 className="text-sm font-semibold text-gray-600 mb-3">My account</h3>
        <Card className="bg-white shadow-md border border-gray-100 divide-y divide-gray-100">
          {accountItems.map((item, idx: number) => (
            <motion.button
              type="button"
              key={`${item.label}-${idx}`}
              whileHover={{ x: 5, backgroundColor: "rgba(249, 250, 251, 1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full px-4 py-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-900">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          ))}
        </Card>
      </motion.div>

      {/* Setting Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mb-6"
      >
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Setting</h3>
        <Card className="bg-white shadow-md border border-gray-100 divide-y divide-gray-100">
          {settingItems.map((item, idx: number) => (
            <motion.button
              type="button"
              key={`${item.label}-${idx}`}
              whileHover={{ x: 5, backgroundColor: "rgba(249, 250, 251, 1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full px-4 py-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-900">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          ))}
        </Card>
      </motion.div>

      {/* Help and Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Help and info</h3>
        <Card className="bg-white shadow-md border border-gray-100">
          {helpItems.map((item, idx: number) => (
            <motion.button
              type="button"
              key={`${item.label}-${idx}`}
              whileHover={{ x: 5, backgroundColor: "rgba(249, 250, 251, 1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full px-4 py-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-900">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          ))}
        </Card>
      </motion.div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* SERVICES TAB */
/* ------------------------------------------------------------------ */

function ServicesTab() {
  const services = [
    {
      icon: Scissors,
      title: "Grooming",
      description: "Professional pet grooming services",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Stethoscope,
      title: "Veterinary",
      description: "Expert veterinary care",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Bone,
      title: "Training",
      description: "Behavioral training programs",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: MapPin,
      title: "Pet Sitting",
      description: "Trusted pet sitting services",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Syringe,
      title: "Vaccination",
      description: "Complete vaccination packages",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Calendar,
      title: "Boarding",
      description: "Safe pet boarding facilities",
      color: "bg-indigo-100 text-indigo-600",
    },
  ] as const

  const nearbyVets = [
    { name: "Pet Care Clinic", distance: "0.5 km", rating: 4.8, reviews: 156 },
    { name: "Animal Hospital", distance: "1.2 km", rating: 4.9, reviews: 203 },
    { name: "Paw Wellness Center", distance: "2.1 km", rating: 4.7, reviews: 89 },
  ] as const

  return (
    <div className="p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-900">Services</h1>
        <motion.div whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}>
          <Bell className="w-6 h-6 text-gray-700" />
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Services</h3>
        <motion.div className="grid grid-cols-2 gap-4">
          {services.map((service, idx: number) => (
            <motion.div
              key={`${service.title}-${idx}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="p-4 bg-white shadow-md border border-gray-100 hover:shadow-lg transition-all cursor-pointer">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-3`}
                >
                  <service.icon className="w-6 h-6" />
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                <p className="text-xs text-gray-600">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Nearby Veterinarians */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Nearby Veterinarians</h3>
        <motion.div className="space-y-3">
          {nearbyVets.map((vet, idx: number) => (
            <motion.div
              key={`${vet.name}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="p-4 bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center"
                    >
                      <Stethoscope className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{vet.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>{vet.distance}</span>
                        <span>•</span>
                        <span className="text-amber-500">★ {vet.rating}</span>
                        <span>({vet.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* WALLET TAB */
/* ------------------------------------------------------------------ */

function WalletTab() {
  const balance = 1250.75

  const transactions = [
    { type: "expense" as const, title: "Vaccination - Lucky", amount: 85.0, date: "Dec 20, 2025", icon: Syringe },
    { type: "income" as const, title: "Refund - Grooming", amount: 45.0, date: "Dec 18, 2025", icon: TrendingUp },
    { type: "expense" as const, title: "Vet Consultation", amount: 120.0, date: "Dec 15, 2025", icon: Stethoscope },
    { type: "expense" as const, title: "Pet Food Order", amount: 67.5, date: "Dec 12, 2025", icon: Bone },
    { type: "income" as const, title: "Cashback Reward", amount: 15.0, date: "Dec 10, 2025", icon: TrendingUp },
  ] as const

  return (
    <div className="p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
        <motion.div whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}>
          <Bell className="w-6 h-6 text-gray-700" />
        </motion.div>
      </motion.div>

      {/* Balance Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-6 mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/80 text-sm mb-1">Total Balance</p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold"
              >
                ${balance.toFixed(2)}
              </motion.h2>
            </div>

            <motion.div
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
            >
              <CreditCard className="w-12 h-12 text-white/80" />
            </motion.div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-full">
                Add Money
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full backdrop-blur-sm">
                Transfer
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="grid grid-cols-3 gap-3 mb-6"
      >
        {[
          { icon: Plus, label: "Top Up", color: "bg-blue-100 text-blue-600" },
          { icon: CreditCard, label: "Cards", color: "bg-purple-100 text-purple-600" },
          { icon: TrendingUp, label: "Rewards", color: "bg-green-100 text-green-600" },
        ].map((action, idx: number) => (
          <motion.div
            key={`${action.label}-${idx}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="p-4 bg-white shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 mx-auto rounded-full ${action.color} flex items-center justify-center mb-2`}
              >
                <action.icon className="w-6 h-6" />
              </motion.div>
              <p className="text-xs font-medium text-gray-900">{action.label}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Transactions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
        <motion.div className="space-y-3">
          {transactions.map((transaction, idx: number) => (
            <motion.div
              key={`${transaction.title}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <Card className="p-4 bg-white shadow-md border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === "expense" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                      }`}
                    >
                      {transaction.type === "expense" ? (
                        <ArrowDownRight className="w-5 h-5" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5" />
                      )}
                    </motion.div>

                    <div>
                      <p className="font-semibold text-gray-900">{transaction.title}</p>
                      <p className="text-xs text-gray-600">{transaction.date}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`font-bold ${transaction.type === "expense" ? "text-red-600" : "text-green-600"}`}>
                      {transaction.type === "expense" ? "-" : "+"}${transaction.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
