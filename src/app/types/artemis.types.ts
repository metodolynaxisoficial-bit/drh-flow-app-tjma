/**
 * Tipos e interfaces da Assistente Virtual Artemis
 * DRH Flow - TJMA
 */

/**
 * Mensagem individual no chat
 */
export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  videoUrl?: string;
  actions?: MessageAction[];
  metadata?: MessageMetadata;
}

/**
 * Ação contextual em uma mensagem
 */
export interface MessageAction {
  label: string;
  onClick: () => void;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

/**
 * Metadados da mensagem
 */
export interface MessageMetadata {
  sentiment?: 'positive' | 'neutral' | 'negative';
  category?: MessageCategory;
  confidence?: number;
  processTime?: number;
}

/**
 * Categorias de mensagens
 */
export type MessageCategory =
  | 'vida_funcional'
  | 'teletrabalho'
  | 'beneficios'
  | 'licencas'
  | 'adicionais'
  | 'protocolo'
  | 'assistencia'
  | 'lgpd'
  | 'outros';

/**
 * Configuração da Artemis
 */
export interface ArtemisConfig {
  /** API key para OpenAI ou serviço de IA equivalente */
  apiKey?: string;
  
  /** Modelo de IA a ser usado (default: gpt-4) */
  model?: string;
  
  /** Habilitar geração de vídeo */
  videoEnabled?: boolean;
  
  /** API key para serviço de geração de vídeo (ex: HeyGen) */
  videoApiKey?: string;
  
  /** URL do webhook para WhatsApp */
  whatsappWebhook?: string;
  
  /** ID do avatar institucional para vídeos */
  avatarId?: string;
  
  /** ID da voz em português BR */
  voiceId?: string;
  
  /** Temperatura do modelo (criatividade) 0-1 */
  temperature?: number;
  
  /** Máximo de tokens na resposta */
  maxTokens?: number;
  
  /** Habilitar logging de conversas */
  enableLogging?: boolean;
  
  /** Contexto adicional personalizado */
  customContext?: string;
}

/**
 * Estado do chat
 */
export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  isVideoLoading: boolean;
  currentVideoUrl: string | null;
  error: Error | null;
  conversationId?: string;
}

/**
 * Resposta da API de IA
 */
export interface AIResponse {
  content: string;
  model: string;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  finishReason: 'stop' | 'length' | 'content_filter';
}

/**
 * Resposta da API de vídeo
 */
export interface VideoResponse {
  videoUrl: string;
  videoId: string;
  duration: number;
  status: 'processing' | 'completed' | 'failed';
  thumbnailUrl?: string;
}

/**
 * Contexto da conversa
 */
export interface ConversationContext {
  userId?: string;
  userRole?: 'servidor' | 'estagiario' | 'residente' | 'aposentado';
  lotacao?: string;
  cargo?: string;
  recentModules?: string[];
  previousQuestions?: string[];
}

/**
 * Métricas de interação
 */
export interface InteractionMetrics {
  conversationId: string;
  messageCount: number;
  avgResponseTime: number;
  videoViewed: boolean;
  actionsTaken: number;
  satisfactionRating?: number;
  transferredToWhatsApp: boolean;
  duration: number; // em segundos
}

/**
 * Prompt do sistema
 */
export interface SystemPrompt {
  role: 'system';
  content: string;
  context?: ConversationContext;
}

/**
 * Parâmetros de busca no histórico
 */
export interface HistorySearchParams {
  userId?: string;
  dateFrom?: Date;
  dateTo?: Date;
  category?: MessageCategory;
  limit?: number;
  offset?: number;
}

/**
 * Resultado de busca no histórico
 */
export interface HistorySearchResult {
  conversations: {
    id: string;
    messages: Message[];
    createdAt: Date;
    updatedAt: Date;
  }[];
  total: number;
  page: number;
  pageSize: number;
}

/**
 * Configuração de notificação
 */
export interface NotificationConfig {
  enabled: boolean;
  sound: boolean;
  vibration: boolean;
  badge: boolean;
}

/**
 * Estado de conexão
 */
export type ConnectionStatus = 
  | 'connected'
  | 'connecting'
  | 'disconnected'
  | 'error';

/**
 * Evento de analytics
 */
export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  timestamp: Date;
  metadata?: Record<string, any>;
}

/**
 * Configuração de cache
 */
export interface CacheConfig {
  enabled: boolean;
  ttl: number; // Time to live em minutos
  maxSize: number; // Tamanho máximo em MB
}

/**
 * Item de cache
 */
export interface CacheItem {
  key: string;
  value: any;
  timestamp: Date;
  expiresAt: Date;
}

/**
 * Opções de exportação
 */
export interface ExportOptions {
  format: 'json' | 'txt' | 'pdf';
  includeMetadata: boolean;
  includeTimestamps: boolean;
  anonymize: boolean;
}

/**
 * Quick Question (Pergunta rápida)
 */
export interface QuickQuestion {
  id: string;
  text: string;
  category: MessageCategory;
  icon?: string;
  priority: number;
}

/**
 * Sugestão automática
 */
export interface AutoSuggestion {
  text: string;
  confidence: number;
  source: 'history' | 'popular' | 'contextual';
}

/**
 * Feedback do usuário
 */
export interface UserFeedback {
  messageId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment?: string;
  helpful: boolean;
  timestamp: Date;
}

/**
 * Capacidade da Artemis
 */
export interface ArtemisCapability {
  id: string;
  category: MessageCategory;
  title: string;
  description: string;
  examples: string[];
  available: boolean;
}

/**
 * Status do serviço
 */
export interface ServiceStatus {
  ai: ConnectionStatus;
  video: ConnectionStatus;
  whatsapp: ConnectionStatus;
  lastCheck: Date;
}

/**
 * Erro customizado da Artemis
 */
export class ArtemisError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: any
  ) {
    super(message);
    this.name = 'ArtemisError';
  }
}

/**
 * Códigos de erro
 */
export enum ArtemisErrorCode {
  NETWORK_ERROR = 'NETWORK_ERROR',
  API_ERROR = 'API_ERROR',
  RATE_LIMIT = 'RATE_LIMIT',
  INVALID_INPUT = 'INVALID_INPUT',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  VIDEO_GENERATION_ERROR = 'VIDEO_GENERATION_ERROR',
  WHATSAPP_ERROR = 'WHATSAPP_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

/**
 * Configuração de retry
 */
export interface RetryConfig {
  maxAttempts: number;
  initialDelay: number; // em ms
  maxDelay: number; // em ms
  backoffMultiplier: number;
}

/**
 * Tipos de eventos do chat
 */
export type ChatEventType =
  | 'message_sent'
  | 'message_received'
  | 'typing_start'
  | 'typing_stop'
  | 'video_played'
  | 'video_paused'
  | 'action_clicked'
  | 'chat_opened'
  | 'chat_closed'
  | 'error_occurred';

/**
 * Evento do chat
 */
export interface ChatEvent {
  type: ChatEventType;
  payload: any;
  timestamp: Date;
}

/**
 * Validação de entrada
 */
export interface InputValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Limites de uso
 */
export interface UsageLimits {
  messagesPerDay: number;
  messagesPerHour: number;
  videoGenerationsPerDay: number;
  currentUsage: {
    messagesToday: number;
    messagesThisHour: number;
    videosToday: number;
  };
}
