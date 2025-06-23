export interface BaseEntity {
  _id?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface ImageSrc {
  original: string
  large2x: string
  large: string
  medium: string
  small: string
  portrait: string
  landscape: string
  tiny: string
}

export interface Image extends BaseEntity {
  id: number
  alt: string
  avg_color: string
  height: number
  width: number
  liked: boolean
  photographer: string
  photographer_id: number
  photographer_url: string
  src: ImageSrc
  url: string
  category: string
}

export interface Message extends BaseEntity {
  name: string
  email: string
  phone: string
  message: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface BaseTranslations {
  title?: string
  subtitle?: string
  description?: string
  button?: string
  moreInfo?: string
}

export interface PersonalTrainingTranslations extends BaseTranslations {
  privateGym?: string
  customSchedules?: string
  personalCoach?: string
  nutritionalGuidance?: string
  tailoredSessions?: string
}

export interface PilatesTranslations extends BaseTranslations {
  studioLocation?: string
  flexibilityBalancePosture?: string
  certifiedCoach?: string
  privateOrGroupOptions?: string
}

export interface FormTranslations {
  name?: string
  email?: string
  phone?: string
  comments?: string
  message?: string
  placeholderName?: string
  placeholderEmail?: string
  placeholderPhone?: string
  placeholderComments?: string
  placeholderMessage?: string
  sendButton?: string
}

export interface PageTranslations extends BaseTranslations, FormTranslations {
  freeTrialText?: string
  tryForFree?: string
  description2?: string
  description3?: string
  description4?: string
  priceInfo?: string
}

export interface HomePageTranslations {
  intro?: BaseTranslations
  personalApproach?: BaseTranslations
  options?: {
    personalTraining?: PersonalTrainingTranslations
    duoTraining?: PersonalTrainingTranslations
    pilates?: PilatesTranslations
  }
  signup?: {
    title?: string
    description1?: string
    description2?: string
    namePlaceholder?: string
    emailPlaceholder?: string
    phonePlaceholder?: string
    messagePlaceholder?: string
    sendButton?: string
    whatsappButton?: string
    whatsappMessage?: string
  }
}

export interface MethodStep {
  stepTitle: string
  stepDescription: string
}

export interface MethodTranslations extends BaseTranslations {
  steps: MethodStep[]
}

export interface AboutTranslations extends BaseTranslations {
  welcomeMessage?: string
  approach?: string
  trainingMethods?: string
  nutritionFocus?: string
  homemadeSweets?: string
  fitnessGoalSupport?: string
  contactButton?: string
}

export interface ContactTranslations extends BaseTranslations, FormTranslations {
  formTitle?: string
  whatsappText?: string
  whatsappButton?: string
  emailContact?: string
  phoneContact?: string
}

export interface AllTranslations {
  homePage?: HomePageTranslations
  personalTrainingPage?: PageTranslations
  pilatesPage?: PageTranslations
  dietPage?: PageTranslations
  aboutPage?: AboutTranslations
  methodPage?: MethodTranslations
  contactPage?: ContactTranslations
  yogaPage?: PageTranslations
}

export interface Language extends BaseEntity {
  code: string
  name: string
  translations: AllTranslations
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export type CategoryType =
  | "pilates"
  | "yoga"
  | "personal"
  | "intro"
  | "diet"
  | "method"
  | "assessment"
  | "customplan"
  | "training"
  | "progresstracking"

export interface PlanDetails {
  key: string
  name: string
  price: number
  trial: string
  recurring: string
  renewal: string
}

export interface Plans {
  [key: string]: {
    key: string
  }
}
