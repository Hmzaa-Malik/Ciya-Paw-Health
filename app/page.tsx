"use client"

import { useEffect, useState } from "react"
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

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const pets: Pet[] = [
  {
    id: 1,
    name: "Demon",
    type: "Dog",
    age: "2 years",
    birthday: "9 Jun 2023",
    image: "/cute-3d-dog-cartoon.jpg",
    avatar: "/cute-dog-face.jpg",
    flag: "🇬🇧",
  },
  {
    id: 2,
    name: "Lucky",
    type: "Cat",
    age: "2 years",
    birthday: "14 May 2023",
    image: "/cute-3d-cat-cartoon.jpg",
    avatar: "/cute-cat-face.png",
    flag: "🇬🇧",
  },
  {
    id: 3,
    name: "Wing",
    type: "Bird",
    age: "1 year",
    birthday: "20 Mar 2024",
    image: "/cute-3d-bird-cartoon.jpg",
    avatar: "/cute-bird-face.jpg",
    flag: "🇬🇧",
  },
]

/* -------------------------------------------------------------------------- */
/*                              SPLASH SCREEN                                 */
/* -------------------------------------------------------------------------- */

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3000)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-6"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <Heart className="w-12 h-12 text-pink-500" fill="currentColor" />
          </div>
        </motion.div>
        <h1 className="text-4xl font-bold text-white">Paw Health</h1>
        <p className="text-white/90 mt-2">Your pet’s wellness companion</p>
        <Loader2 className="w-8 h-8 text-white animate-spin mx-auto mt-6" />
      </div>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                MAIN PAGE                                   */
/* -------------------------------------------------------------------------- */

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<
    "home" | "pet-health" | "services" | "wallet" | "profile"
  >("home")
  const [selectedPet, setSelectedPet] = useState<Pet>(pets[0])

  return (
    <>
      <AnimatePresence>{loading && <SplashScreen onComplete={() => setLoading(false)} />}</AnimatePresence>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-md mx-auto min-h-screen pb-24 relative">

          <AnimatePresence mode="wait">
            {activeTab === "home" && (
              <HomeTab
                key="home"
                pets={pets}
                selectedPet={selectedPet}
                setSelectedPet={setSelectedPet}
              />
            )}
            {activeTab === "pet-health" && (
              <PetHealthTab key="health" selectedPet={selectedPet} />
            )}
            {activeTab === "services" && <ServicesTab key="services" />}
            {activeTab === "wallet" && <WalletTab key="wallet" />}
            {activeTab === "profile" && <ProfileTab key="profile" pets={pets} />}
          </AnimatePresence>

          {/* Bottom Navigation */}
          <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t flex justify-around py-3">
            {[
              { id: "home", icon: Home },
              { id: "pet-health", icon: Activity },
              { id: "services", icon: Grid3x3 },
              { id: "wallet", icon: Wallet },
              { id: "profile", icon: User },
            ].map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={activeTab === id ? "text-blue-600" : "text-gray-400"}
              >
                <Icon className="w-6 h-6 mx-auto" />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 HOME TAB                                   */
/* -------------------------------------------------------------------------- */

function HomeTab({
  pets,
  selectedPet,
  setSelectedPet,
}: {
  pets: Pet[]
  selectedPet: Pet
  setSelectedPet: React.Dispatch<React.SetStateAction<Pet>>
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="p-6"
    >
      <h2 className="text-xl font-bold mb-4">Welcome to Paw Health</h2>

      {/* Pet Selector */}
      <div className="flex gap-4 mb-6">
        {pets.map((pet: Pet) => (
          <button key={pet.id} onClick={() => setSelectedPet(pet)}>
            <Avatar className={selectedPet.id === pet.id ? "ring-2 ring-blue-500" : ""}>
              <AvatarImage src={pet.avatar} />
              <AvatarFallback>{pet.name[0]}</AvatarFallback>
            </Avatar>
          </button>
        ))}
      </div>

      {/* Selected Pet Card */}
      <Card className="bg-gradient-to-br from-blue-400 to-purple-500 text-white p-6">
        <img src={selectedPet.image} className="h-40 mx-auto mb-4" />
        <h3 className="text-2xl font-bold">{selectedPet.name}</h3>
        <p>{selectedPet.type} • {selectedPet.age}</p>
        <p className="text-sm mt-1">🎂 {selectedPet.birthday}</p>
      </Card>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*                               PET HEALTH TAB                                */
/* -------------------------------------------------------------------------- */

function PetHealthTab({ selectedPet }: { selectedPet: Pet }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Pet Health</h2>
      <Card className="p-4 mb-4">
        <p className="font-semibold">{selectedPet.name}</p>
        <p className="text-sm">{selectedPet.type}</p>
      </Card>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                PROFILE TAB                                 */
/* -------------------------------------------------------------------------- */

function ProfileTab({ pets }: { pets: Pet[] }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <div className="flex gap-3">
        {pets.map((pet: Pet) => (
          <Avatar key={pet.id}>
            <AvatarImage src={pet.avatar} />
            <AvatarFallback>{pet.name[0]}</AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                SERVICES TAB                                */
/* -------------------------------------------------------------------------- */

function ServicesTab() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Services</h2>
      <p className="text-gray-600">Grooming, Vet Care, Training & more</p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 WALLET TAB                                 */
/* -------------------------------------------------------------------------- */

function WalletTab() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Wallet</h2>
      <Card className="p-4">
        <p className="text-2xl font-bold">$1,250.75</p>
      </Card>
    </div>
  )
}
