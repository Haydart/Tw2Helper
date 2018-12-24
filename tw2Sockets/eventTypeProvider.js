/*
 * Complete list of listeners (game version v1.76)
 */

// noinspection BadExpressionStatementJS
injector.get('eventTypeProvider') === {
    // socket service events
    'SOCKET_EMIT': 'Internal/Socket/emit',
    'SOCKET_EMIT_MULTIPLE': 'Internal/Socket/emitMultiple',

    // Connection events
    'RECONNECT': 'Internal/Connection/reconnect',
    'SOCKET_DISCONNECTED': 'Internal/socket/disconnected',
    'SOCKET_CONNECTED': 'Internal/socket/connected',
    'SOCKET_RECONNECTED_ATTEMPT': 'Internal/socket/reconnect_attempt',
    'SOCKET_RECONNECTING': 'Internal/socket/reconnecting',
    'SOCKET_RECONNECT_ERROR': 'Internal/socket/reconnect_error',
    'SOCKET_RECONNECT_FAILED': 'Internal/socket/reconnect_failed',
    'SOCKET_ERROR': 'Internal/socket/error',

    'TUTORIAL_COMPLETED': 'Internal/tutorial/completed',
    'REFOCUS': 'Internal/Map/selectVillage',

    // audio events
    'AUDIO_PLAY_SFX': 'Internal/audio/play/sfx',

    // Map events
    'MAP_SELECT_VILLAGE': 'Internal/Map/selectVillage',
    'MAP_SELECTED_VILLAGE': 'Internal/Map/selectedVillage',
    'MAP_ZOOM': 'Internal/Map/zoom',
    'MAP_TOGGLE_VIEW': 'Internal/Map/toggleView',
    'MAP_ZOOM_INTO_VILLAGE': 'Internal/Map/zoomIntoVillage',
    'MAP_ZOOM_OUT_OF_VILLAGE': 'Internal/Map/zoomOutOfVillage',
    'MAP_ZOOM_STEP_CHANGED': 'Internal/Map/zoomStepChanged',
    'MAP_VILLAGE_VIEW': 'Internal/Map/villageView',
    'MAP_JUMP_TO': 'Internal/Map/jumpTo',
    'MAP_CENTER_ON_POSITION': 'Internal/Map/centerOnPosition',
    'MAP_LOADING_ASSETS': 'Internal/Map/loadingAssets',
    'MAP_INITIALIZED': 'Internal/Map/initialized',
    'MAP_INITIALIZE': 'Internal/Map/initialize',
    'MAP_ALREADY_INITIALIZED': 'Internal/Map/alreadyInitialized',
    'MAP_MOVEMENT_SELECTED': 'Internal/Map/movementSelected',
    'MAP_MOVEMENT_UPDATE': 'Internal/Map/movementUpdate',

    // tick-subscption events
    'VILLAGE_TICK_ADD': 'Internal/villageTickAdd',
    'VILLAGE_TICK_REMOVE': 'Internal/villageTickRemove',

    // Village events
    'VILLAGE_SELECT_BUILDING': 'Internal/Village/selectedBuilding',
    'VILLAGE_SWITCH': 'Internal/Village/switch',
    'VILLAGE_LOST': 'Internal/Village/lost',
    'VILLAGE_CONQUERED': 'Internal/Village/conquered',
    'VILLAGE_SELECTED_CHANGED': 'Internal/Village/selectedChanged',
    'VILLAGE_TIMELINE_CHANGED': 'Internal/Village/timelineChanged',
    'VILLAGE_UNIT_INFO_CHANGED': 'Internal/Village/unitInfoChanged',
    'VILLAGE_COMPUTED_RESOURCES_CHANGED': 'Internal/Village/computedResourcesChanged',
    'VILLAGE_SELECTED_COMPUTED_RESOURCES_CHANGED': 'Internal/Village/selectedComputedResourcesChanged',
    'VILLAGE_READY': 'Internal/Village/ready',
    'VILLAGE_BUILDING_QUEUE_CHANGED': 'Internal/Village/buildingQueueChanged',
    'VILLAGE_SCOUTING_INFO_CHANGED': 'Internal/Village/scoutingInfoChanged',
    'VILLAGE_PRODUCTION_RATES_CHANGED': 'Internal/Village/productionRatesChanged',
    'VILLAGE_HOSPITAL_CHANGED': 'Internal/Village/hospitalChanged',
    'VILLAGE_INFO_CHANGED': 'Internal/Village/infoChanged',

    // Groups events
    'GROUPS_VILLAGES_CHANGED': 'Internal/Groups/villagesChanged',

    // Recruiting events
    'RECRUIT_JOB_ADDED': 'Internal/Recruit/jobAdded',
    'RECRUIT_JOB_REMOVED': 'Internal/Recruit/jobRemoved',

    // Notification
    'NOTIFICATION_NEW': 'Notification/new',
    'NOTIFICATION_DISABLE': 'Internal/Notification/disable',
    'NOTIFICATION_ENABLE': 'Internal/Notification/enable',
    'NOTIFICATION_SHOW': 'Notification/show',
    'NOTIFICATION_HIDE': 'Notification/hide',

    'INTERFACE_QUEUE_SELECTED': 'Internal/InterfaceQueueSelected',

    // Icon animations
    'ICON_ANIMATION_NEW': 'Internal/IconAnimationNew',

    // Overview screen
    'OVERVIEW_FILTERS_CHANGED': 'Internal/OverviewFiltersChanged',
    'OVERVIEW_VILLAGES': 'Overview/villages',
    'OVERVIEW_TOGGLE_VIEW': 'Internal/Overview/toggleView',
    'OVERVIEW_TOGGLE_MASS_RECRUITING': 'Internal/Overview/toggleMassRecruiting',
    'OVERVIEW_TOGGLE_MASS_BUILDING': 'Internal/Overview/toggleMassBuilding',
    'OVERVIEW_TOGGLE_CHECKBOX': 'Internal/Overview/toggleCheckbox',
    'OVERVIEW_MASS_RECRUIT_CLICKED': 'Internal/Overview/massRecruitClicked',
    'OVERVIEW_MASS_RECRUIT_TOGGLE_PREVIEW': 'Internal/Overview/massRecruitTogglePreview',
    'OVERVIEW_MASS_RECRUIT_UNIT_AMOUNTS_CHANGED': 'Internal/Overview/massRecruitUnitAmountsChanged',

    // Player
    'PLAYER_PASSWORDRESET_INITIATED': 'Player/passwordResetInitiated',
    'PLAYER_BANNED': 'Player/banned',

    // unsorted
    'RESOURCES': 'Internal/resources',
    'ALL_VILLAGE_RESOURCES': 'Internal/allVillageResources',

    // tooltip
    'TOOLTIP_SHOW': 'Internal/Tooltip/show',
    'TOOLTIP_HIDE': 'Internal/Tooltip/hide',

    // select
    'SELECT_SHOW': 'Internal/Select/show',
    'SELECT_HIDE': 'Internal/Select/hide',
    'SELECT_KEY_HOVER': 'Internal/Select/hover',
    'SELECT_SELECTED': 'Internal/Select/selected',

    // rte menu
    'RICH_TEXT_EDITOR_MENU_SHOW': 'Internal/RichTextEditorMenu/show',
    'RICH_TEXT_EDITOR_MENU_HIDE': 'Internal/RichTextEditorMenu/hide',
    'RICH_TEXT_EDITOR_MENU_ACTION': 'Internal/RichTextEditorMenu/action',

    // world search
    'WORLD_MAP_SEARCH_TOGGLE': 'Internal/WorldMapSearch/toggle',

    // report
    'REPORT_SHOW': 'Internal/Report/show',
    'REPORT_SWITCH_PAGE': 'Internal/Report/switchPage',
    'REPORT_PAGE_SWITCHED': 'Internal/Report/pageSwitched',
    'REPORT_NEW_ON_LIST': 'Internal/Report/newOnList',

    // game settings
    'GAME_SETTINGS_CHANGED': 'Internal/Game/settingsChanged',

    // context menu
    'SHOW_CONTEXT_MENU': 'Internal/ContextMenuShow',
    'DESTROY_CONTEXT_MENU': 'Internal/ContextMenuDestroy',

    // Client based tracking events
    'TRACKING_EMAIL_VALIDATE': 'Internal/Tracking/emailValidate',

    'TRIBE_LEFT': 'Internal/Tribe/left',
    'TRIBE_TAB_SELECTED': 'Internal/Tribe/tabSelected',
    'TRIBE_TAB_SET': 'Internal/Tribe/tabSet',
    'TRIBE_PROFILE_DATA_SET': 'Internal/Tribe/profileDataSet',

    'RESOURCE_DEPOSIT_JOB_COLLECTIBLE': 'Internal/ResourceDeposit/collectible',

    'WINDOW_CLOSED': 'Internal/Window/closed',

    // Smart tips
    'SMART_TIP_SHOW': 'Internal/SmartTip/show',
    'SMART_TIP_HIDE': 'Internal/SmartTip/hide',
    'SMART_TIP_REQUEST_DISABLE': 'Internal/SmartTip/requestDisable',

    // World config
    'WORLD_CONFIG_CHANGED': 'Internal/WorldConfig/changed',

    // Game state
    'GAME_STATE_INITIAL_VILLAGE_READY': 'Internal/GameState/InitialVillageReady',
    'GAME_STATE_VILLAGE_CANVAS_READY': 'Internal/GameState/villageCanvasReady',
    'GAME_STATE_ALL_VILLAGES_READY': 'Internal/GameState/allVillagesReady',
    'GAME_STATE_MASS_RECRUITING_CHANGED': 'Internal/GameState/massRecruitingChanged',

    'SECOND_VILLAGE_READY': 'Internal/SecondVillage/ready',

    'PAGINATION_LIMIT_SET': 'Internal/paginationLimitSet',

    'APP_VISIBILITY_CHANGED': 'Internal/App/VisibilityChanged',

    'VILLAGE_DROPDOWN_HIDE': 'Internal/VillageDropDownHide',

    // ####### SOCKET ################################################
    //
    // Received tracking snippet events.
    'TRACKING_SNIPPET_VALID': 'TrackingSnippet/valid',
    // There is also a tracking event triggered by our back-end w/o client request.
    'TRACKING_SNIPPET_EVENT': 'TrackingSnippet/event',

    // Registration events
    'REGISTER_SUCCESS': 'Register/success',

    // Maintenance
    'MAINTENANCE_BEGIN': 'System/maintenance',
    'MAINTENANCE_END': 'System/maintenanceEnd',

    // Authentication events
    'LOGIN_SUCCESS': 'Login/success',
    'LOGIN_ERROR': 'Login/error',
    'LOGOUT_SUCCESS': 'Logout/success',
    'RECONNECTED': 'Authentication/reconnected',
    'CHARACTER_SELECTED': 'Authentication/characterSelected',
    'CHARACTER_CREATED': 'Authentication/characterCreated',
    'CHARACTER_PROFILE': 'Character/profile',
    'CHARACTER_PROFILE_SET': 'Character/profileSet',
    'CHARACTER_VILLAGE_CREATED': 'Character/villageCreated',
    'CHARACTER_INFO': 'Character/info',
    'CHARACTER_GAME_OVER': 'Character/gameOver',

    // Village events
    'VILLAGE': 'Village/village',
    'VILLAGE_WALL_INFO': 'Village/wallInfo',
    'VILLAGE_ARMY_CHANGED': 'Village/armyChanged',
    'VILLAGE_UNITSCREEN_INFO': 'UnitScreen/data',
    'VILLAGE_BATCH_VILLAGE_DATA': 'VillageBatch/villageData',

    // Building events
    'BUILDING_LEVEL_CHANGED': 'Building/levelChanged',
    'BUILDING_QUEUE': 'Building/queue',
    'BUILD_JOB_CANCELLED': 'Building/jobCancelled',
    'BUILD_JOB_ALL_CANCELLED': 'Building/allJobsCancelled',

    'MESSAGE_WELCOME': 'System/welcome',
    'MESSAGE_SUCCESS': 'Message/success',
    'MESSAGE_ERROR': 'Message/error',
    'MESSAGE_DEBUG': 'Message/debug',
    'MESSAGE_PARTY': 'Message/party',

    'SYSTEM_TIME': 'System/time',

    // Academy events
    'ACADEMY_INFO': 'Academy/info',
    'ACADEMY_MINTED_COINS': 'Academy/mintedCoins',
    'ACADEMY_MASS_MINT_FINISHED': 'Academy/massMintFinished',
    'ACADEMY_MASS_MINT_PART': 'Academy/massMintPart',
    'ACADEMY_TRAINING_CANCELLED': 'Academy/trainingCancelled',
    'ACADEMY_TRAINING_COMPLETE': 'Academy/trainingComplete',
    'ACADEMY_TRAINING_NOBLE': 'Academy/trainingNoble',
    'ACADEMY_TRAINING': 'Academy/training',

    // Army events
    'ARMY_PRESET_ASSIGNED': 'ArmyPreset/assigned',
    'ARMY_PRESET_DELETED': 'ArmyPreset/deleted',
    'ARMY_PRESET_FOR_VILLAGE': 'ArmyPreset/forVillage',
    'ARMY_PRESET_LIST': 'ArmyPreset/presetList',
    'ARMY_PRESET_SAVED': 'ArmyPreset/saved',
    'ARMY_PRESET_UPDATE': 'Internal/ArmyPreset/update',


    // Building events
    'BUILDING_TEARING_DOWN': 'Building/tearingDown',
    'BUILDING_UPGRADING': 'Building/upgrading',

    // Character events
    'CHARACTER_RESTARTED': 'Character/restarted',
    'CHARACTER_ROLE_CHANGED': 'Character/roleChanged',
    'CHARACTER_VILLAGES': 'Village/characterVillages',
    'GLOBAL_INFORMATION': 'GlobalInformation/info',

    'COOP_INVITATION_ACCEPTED': 'Coop/invitationAccepted',
    'COOP_INVITATION_DECLINED': 'Coop/invitationDeclined',
    'COOP_STATUS': 'Coop/coopStatus',
    'COOP_INVITATION_RECEIVED': 'Coop/invitationReceived',
    'COOP_INVITATION_SENT': 'Coop/invitationSent',
    'COOP_INVITATION_WITHDRAWN': 'Coop/invitationWithdrawn',
    'COOP_CHARACTER_REMOVED': 'Coop/playerRemoved',
    'COOP_CHARACTER_LEFT': 'Coop/characterLeft',

    // Command events
    'COMMAND_CANCELLED': 'Command/cancelled',
    'COMMAND_IGNORED': 'Command/ignored',
    'COMMAND_OWN_COMMANDS': 'Command/ownCommands',
    'COMMAND_FOREIGN_COMMANDS': 'Command/foreignCommands',
    'COMMAND_SENT': 'Command/sent',
    'COMMAND_RETURNED': 'Command/returned',
    'COMMAND_INCOMING': 'Command/incoming',
    'COMMAND_WITHDRAWN_SUPPORT': 'Command/supportWithdrawn',
    'COMMAND_SUPPORT_ARRIVED': 'Command/supportArrived',

    // Game data events
    'GAME_DATA_BATCH': 'GameDataBatch/gameData',
    'GAME_DATA_BASE_DATA': 'GameData/baseData',
    'GAME_DATA_UNITS': 'GameData/units',
    'GAME_DATA_BUILDINGS': 'GameData/buildings',
    'GAME_DATA_RESEARCHES': 'GameData/research',
    'GAME_DATA_COSTS_PER_COIN': 'GameData/costsPerCoin',
    'GAME_DATA_PREMIUM_COSTS': 'GameData/premium',
    'GAME_DATA_OFFICERS': 'GameData/officers',

    // Map events
    'MAP_DELETED_LAYER': 'Map/deletedLayer',
    'MAP_LAYER': 'Map/layer',
    'MAP_LAYERS': 'Map/layers',
    'MAP_SAVED_LAYER': 'Map/savedLayer',
    'MAP_VILLAGE_DATA': 'Map/villageData',
    'MAP_VILLAGE_DETAILS': 'Map/villageDetails',
    'MAP_KINGDOMS': 'Map/kingdoms',
    'MAP_PROVINCE': 'Map/province',
    'MAP_PROVINCE_RENAMED': 'Map/renamedProvince',
    'MAP_TUTORIAL_VILLAGE_SET': 'Map/tutorialVillageSet',
    'MAP_NEW_VILLAGE': 'Map/newVillage',
    'MAP_PROVINCE_CONFIG': 'Map/provinceConfig',

    // Report events
    'REPORT_DELETED': 'Report/deleted',
    'REPORT_LIST': 'Report/list',
    'REPORT_MARKED_READ': 'Report/markedRead',
    'REPORT_MARKED_UNREAD': 'Report/markedUnread',
    'REPORT_NEW': 'Report/new',
    'REPORT_VIEW': 'Report/view',
    'REPORT_MARKED_FAVOURITE': 'Report/markedFav',
    'REPORT_UNMARKED_FAVOURITE': 'Report/unmarkedFav',
    'REPORT_SETTINGS_SAVED': 'Report/settingsSaved',
    'REPORT_MARKED_SEEN': 'Report/markedSeen',
    'REPORT_DELETED_ALL': 'Report/deletedAll',

    // Research events
    'RESEARCH_UNLOCKED': 'Research/unlocked',
    'RESEARCH_RESEARCHED': 'Internal/research/researched',

    // Scouting events
    'SCOUTING_CANCELLED': 'Scouting/cancelled',
    'SCOUTING_COUNTER_MEASURE_SET': 'Scouting/counterMeasureSet',
    'SCOUTING_INFO': 'Scouting/info',
    'SCOUTING_RECRUITING_CANCELED': 'Scouting/recruitingCanceled',
    'SCOUTING_RECRUITING_STARTED': 'Scouting/recruitingStarted',
    'SCOUTING_SENT': 'Scouting/sent',
    'SCOUTING_SPY_PRODUCED': 'Scouting/spyProduced',

    // System events
    'SYSTEM_NIGHT_MODE': 'System/nightMode',

    // Timline events
    'TIMELINE_TOGGLE': 'Internal/Timeline/toggle',
    'TIMELINE_RECRUITING_PREVIEW': 'Internal/Timeline/recruitingPreview',
    'TIMELINE_EVENT_DETAILS': 'Timeline/eventDetails',
    'TIMELINE_NEW_EVENT': 'Timeline/newEvent',
    'TIMELINE_EVENTS': 'Timeline/events',
    'TIMELINE_RETURNING_COMMAND': 'Timeline/returningCommand',

    // Tribe events
    'TRIBE_CREATED': 'Tribe/created',
    'TRIBE_DISBANDED': 'Tribe/disbanded',
    'TRIBE_MEMBER_KICKED': 'Tribe/memberKicked',
    'TRIBE_MEMBER_LIST': 'Tribe/memberList',
    'TRIBE_MEMBER_RIGHTS_SET': 'Tribe/memberRightsSet',
    'TRIBE_MEMBER_TITLE_SET': 'Tribe/memberTitleSet',
    'TRIBE_MEMBER_TRUSTED_SET': 'Tribe/memberTrusted',
    'TRIBE_MEMBER_LEFT': 'Tribe/memberLeft',
    'TRIBE_PRESETS_INDEX': 'Tribe/rightPresets',
    'TRIBE_PROFILE': 'Tribe/profile',
    'TRIBE_MEMBER_CHANGED': 'Internal/tribeMemberChanged',

    'TRIBE_FOUNDER_UPDATED': 'Tribe/founderPassed',
    'TRIBE_JOINED': 'Tribe/joined',
    'TRIBE_WELCOME': 'Tribe/welcome',
    'TRIBE_SETTINGS_CHANGED': 'Tribe/settingsChanged',

    'TRIBE_APPLICATION_ACCEPTED': 'TribeApplication/accepted',
    'TRIBE_APPLICATION_CREATED': 'TribeApplication/created',
    'TRIBE_APPLICATION_REJECTED': 'TribeApplication/rejected',
    'TRIBE_APPLICATION_ABORTED': 'TribeApplication/aborted',
    'TRIBE_APPLICATION_INDEX': 'TribeApplication/tribeApplications',
    'TRIBE_APPLICATION_OWN': 'TribeApplication/ownApplications',

    'TRIBE_INVITATION_ACCEPTED': 'TribeInvitation/accepted',
    'TRIBE_INVITATION_REJECT': 'TribeInvitation/rejected',
    'TRIBE_INVITATION_ABORTED': 'TribeInvitation/aborted',
    'TRIBE_INVITATION_CREATED': 'TribeInvitation/created',
    'TRIBE_INVITATION_OWN': 'TribeInvitation/ownInvitations',
    'TRIBE_INVITATION_INDEX': 'TribeInvitation/tribeInvitations',

    'TRIBE_RELATION_CHANGED': 'TribeRelation/changed',
    'TRIBE_RELATION_LIST': 'TribeRelation/list',

    'TRIBE_ACHIEVEMENTS': 'Achievement/tribeAchievements',

    'TRIBE_TAB_DISCARD_CHANGED_SKILLS': 'Internal/Tribe/tabDiscardChangedSettings',

    'CHARACTER_ACHIEVEMENTS': 'Achievement/characterAchievements',
    'ACHIEVEMENTS_ALL': 'Achievement/all',
    'ACHIEVEMENTS_ACHIEVED': 'Achievement/achieved',
    'ACHIEVEMENT_PROGRESS': 'Achievement/progress',

    // Tribe Skills
    'TRIBE_SKILL_DONATED': 'TribeSkill/donated',
    'TRIBE_SKILL_DONATION_RANKING': 'TribeSkill/honorRanking',
    'TRIBE_SKILL_ASSIGNED': 'TribeSkill/assigned',
    'TRIBE_SKILL_REASSIGNED': 'TribeSkill/reassigned',
    'TRIBE_SKILLS_INFO': 'TribeSkill/info',

    // Village events
    'VILLAGE_PROVINCE_VILLAGES': 'Village/provinceVillages',
    'VILLAGE_RESOURCE_INFO': 'Village/resourceInfo',
    'VILLAGE_RESOURCES_CHANGED': 'Village/resourcesChanged',
    'VILLAGE_STORAGE_INFO': 'Village/storageInfo',
    'VILLAGE_UNIT_INFO': 'Village/unitInfo',
    'VILLAGE_NAME_CHANGED': 'Village/nameChanged',
    'VILLAGE_OWNER_CHANGED': 'Village/changeVillageOwner',

    // Hospital
    'HOSPITAL_PATIENTS': 'Hospital/patients',
    'HOSPITAL_NEW_PATIENT': 'Hospital/newPatient',
    'HOSPITAL_PATIENT_RELEASED': 'Hospital/released',
    'HOSPITAL_PATIENT_HEALED': 'Hospital/healed',

    // Widget events
    'WIDGET_WIDGETS': 'Widget/widgets',

    // World events
    'WORLD_CONFIG': 'WorldConfig/config',
    'WORLD_CONFIG_UPDATE': 'WorldConfig/updateConfig',

    // Trading
    'TRADING_MERCHANT_STATUS': 'Trading/merchantStatus',
    'TRADING_OFFER_LIST': 'Offer/list',
    'TRADING_OFFER_CREATED': 'Offer/created',
    'TRADING_OFFER_REMOVED': 'Offer/removed',
    'TRADING_OFFER_ACCEPTED': 'Offer/accepted',
    'TRADING_TRANSPORT_NEW': 'Transport/new',
    'TRADING_TRANSPORT_INDEX': 'Transport/list',
    'TRADING_TRANSPORT_ARRIVED': 'Transport/arrived',
    'TRADING_TRANSPORT_RETURNED': 'Transport/returned',
    'TRADING_TRANSPORT_CANCELED': 'Transport/canceled',
    'PREMIUM_INSTANT_TRADED': 'Trading/instantTradeCompleted',

    // Ranking
    'RANKING_CHARACTER_LIST': 'Ranking/character',
    'RANKING_TRIBE_LIST': 'Ranking/tribe',

    // Messaging
    'MESSAGE_LIST': 'Message/list',
    'MESSAGE_VIEW': 'Message/view',
    'MESSAGE_SENT': 'Message/sent',
    'MESSAGE_NEW': 'Message/new',
    'MESSAGE_PARTICIPATNS_ADDED': 'Message/participantsAdded',
    'MESSAGE_CHAR_KICKED': 'Message/characterKicked',
    'MESSAGE_FOLDER_CHANGED': 'Message/changedFolder',
    'MESSAGE_DELETED': 'Message/deleted',
    'MESSAGE_MARKED_READ': 'Message/markedRead',
    'MESSAGE_MARKED_UNREAD': 'Message/unmarkedRead',
    'MESSAGE_CHAR_LEFT': 'Message/characterLeft',

    // friendlist
    'FRIENDLIST': 'Friendlist/list',
    'FRIEND_ADDED': 'Friendlist/new',
    'FRIEND_REMOVED': 'Friendlist/removed',

    // Specials
    'FORCE_MODEL_UPDATE': 'Specials/forceModelUpdate',

    'EXCEPTION_DB': 'Exception/DbException',
    'EXCEPTION_SYSTEM': 'Exception/SystemException',
    'EXCEPTION_API': 'Exception/ApiErrorException',
    'EXCEPTION_UNMET_REQUIREMENTS': 'Exception/UnmetRequirementsException',

    'BARRACKS_RECRUIT_JOB_CANCELED': 'Barracks/recruitJobCanceled',
    'BARRACKS_RECRUIT_JOB_CREATED': 'Barracks/recruitJobCreated',
    'BARRACKS_RECRUIT_JOB_STARTED': 'Barracks/recruitJobStarted',

    'PRECEPTORY_RECRUIT_JOB_CANCELED': 'Preceptory/recruitJobCanceled',
    'PRECEPTORY_RECRUIT_JOB_CREATED': 'Preceptory/recruitJobCreated',
    'PRECEPTORY_RECRUIT_JOB_STARTED': 'Preceptory/recruitJobStarted',

    'ACADEMY_RECRUIT_JOB_CREATED': 'Academy/recruitJobCreated',
    'ACADEMY_RECRUIT_JOB_CANCELED': 'Academy/recruitJobCanceled',

    'BARBARIAN_PRODUCTION_BOOSTED': 'Barbarian/productionBoosted',

    'STATUE_RECRUIT_JOB_CREATED': 'Statue/recruitJobCreated',
    'STATUE_RECRUIT_JOB_CANCELED': 'Statue/recruitJobCanceled',
    'STATUE_RECRUIT_JOB_FINISHED': 'Statue/recruitJobFinished',
    'STATUE_QUEUE_CHANGED': 'Internal/Statue/queueChanged',
    'PALADIN_INFO': 'Paladin/info',
    'PALADIN_RELOCATED': 'Paladin/relocated',
    'PALADIN_RENAMED': 'Paladin/renamed',
    'PALADIN_ITEM_EQUIPPED': 'Paladin/itemEquipped',
    'PALADIN_UNLOCK_NEXT_ITEM': 'Paladin/itemUpgraded',
    'PALADIN_SUMMONED': 'Paladin/summoned',
    'PALADIN_DIED': 'Internal/Paladin/died',
    'PALADIN_COMMAND_CHANGED': 'Internal/Paladin/commandChange',
    'COMMAND_RELOCATED': 'Command/relocated',

    'PREMIUM_SHOP_OFFERS': 'Premium/shopOffers',
    'PREMIUM_ITEM_BOUGHT': 'Premium/itemBought',
    'PREMIUM_OFFER_REMOVED': 'Premium/offerRemoved',
    'INVENTORY': 'Premium/items',
    'INVENTORY_ITEM_CHANGED': 'Premium/itemChange',
    'INVENTORY_MARKED_SEEN': 'Premium/markedSeen',

    'UNIT_RECRUIT_JOB_FINISHED': 'Unit/recruitJobFinished',
    'UNIT_MASS_RECRUIT_STARTED': 'Unit/massRecruitStarted',
    'UNIT_MASS_RECRUIT_PART': 'Unit/massRecruitPart',
    'UNIT_MASS_RECRUIT_FINISHED': 'Unit/massRecruitFinished',
    'UNIT_BATTLE': 'Unit/battle',

    'PREMIUM_CHANGED': 'Premium/currencyChange',
    'PREMIUM_PAYMENT_IFRAME_URL': 'Premium/iframeUrl',

    // barracks - daily unit deal
    'PREMIUM_DAILY_UNIT_DEAL_OFFERS': 'DailyUnitDeal/offers',
    'PREMIUM_DAILY_UNIT_DEAL_ACCEPTED': 'DailyUnitDeal/accepted',
    'PREMIUM_DAILY_UNIT_DEAL_REROLLED': 'DailyUnitDeal/rerolled',

    // resource deposit
    'RESOURCE_DEPOSIT_INFO': 'ResourceDeposit/info',
    'RESOURCE_DEPOSIT_JOBS_REROLLED': 'ResourceDeposit/rerolled',
    'RESOURCE_DEPOSIT_JOB_STARTED': 'ResourceDeposit/jobStarted',
    'RESOURCE_DEPOSIT_JOB_COLLECTED': 'ResourceDeposit/collected',

    // preceptory
    'PRECEPTORY_ORDER_SELECTED': 'Preceptory/orderSelected',
    'PRECEPTORY_ORDER_RESET': 'Preceptory/orderReset',

    'SETTINGS_ACCOUNT_INFO': 'Settings/accountInfo',
    'SETTINGS_PASSWORD_CHANGED': 'Settings/passwordChanged',

    // quests
    'QUESTS_QUEST_LINES': 'Quest/questLines',
    'QUESTS_QUEST_LINE_STARTED': 'Quest/questLineStarted',
    'QUESTS_QUEST_PROGRESS': 'Quest/progress',
    'QUESTS_QUEST_FINISHED': 'Quest/closed',
    'QUESTS_QUEST_LINE_FINISHED': 'Internal/QuestLineFinished',
    'QUESTS_QUEST_MARKED_READ': 'Quest/markedRead',

    // forum
    'FORUM_FORUM_DELETED': 'Forum/deleted',
    'FORUM_FORUM_CREATED': 'Forum/created',
    'FORUM_THREAD_CREATED': 'Forum/threadCreated',
    'FORUM_POST_CREATED': 'Forum/postCreated',
    'FORUM_POST_DELETED': 'Forum/postDeleted',
    'FORUM_POST_EDITED': 'Forum/postEdited',
    'FORUM_THREAD_LIST': 'Forum/threadList',
    'FORUM_THREAD_RENAMED': 'Forum/threadRenamed',
    'FORUM_THREADS_MARKED_READ': 'Forum/threadsMarkedRead',
    'FORUM_THREADS_MARKED_UNREAD': 'Forum/threadsMarkedUnread',
    'FORUM_THREADS_PINNED': 'Forum/threadsPinned',
    'FORUM_THREADS_UNPINNED': 'Forum/threadsUnpinned',
    'FORUM_THREADS_MOVED': 'Forum/threadsMoved',
    'FORUM_THREADS_CLOSED': 'Forum/threadsClosed',
    'FORUM_THREADS_REOPENED': 'Forum/threadsReopened',
    'FORUM_FORUM_MARKED_READ': 'Forum/forumMarkedRead',
    'FORUM_FORUM_MARKED_UNREAD': 'Forum/forumMarkedUnread',
    'FORUM_THREADS_DELETED': 'Forum/threadsDeleted',
    'FORUM_FORUM_RENAMED': 'Forum/renamed',
    'FORUM_FORUM_ORDER_SET': 'Forum/orderSet',
    'FORUM_THREADS_UPDATED': 'Internal/threadsUpdated',
    'FORUM_FORUM_LIST': 'Forum/forumList',

    // groups
    'GROUPS_INDEX': 'Group/groups',
    'GROUPS_CREATED': 'Group/new',
    'GROUPS_DESTROYED': 'Group/deleted',
    'GROUPS_UPDATED': 'Group/changed',
    'GROUPS_VILLAGES': 'Icon/villages',
    'GROUPS_VILLAGE_LINKED': 'Group/linked',
    'GROUPS_VILLAGE_UNLINKED': 'Group/unlinked',
    'GROUPS_VILLAGE_LINKED_SYSTEM': 'Icon/command',

    // closed beta
    'CLOSED_BETA_REGISTERED': 'ClosedBeta/registered',
    'CLOSED_BETA_ENTERED': 'ClosedBeta/entered',

    // chat
    //'CHAT_RECEIVED_GLOBAL':                 'Chat/global',
    'CHAT_RECEIVED_TRIBE': 'Chat/tribe',
    'CHAT_TRIBE_HISTORY': 'Chat/tribeHistory',

    // PlayerEmail
    'PLAYEREMAIL_CHANGE_REQUESTED': 'PlayerEmail/changeRequested',

    // second-village
    'SECOND_VILLAGE_JOB_STARTED': 'SecondVillage/jobStarted',
    'SECOND_VILLAGE_JOB_COLLECTED': 'SecondVillage/jobCollected',
    'SECOND_VILLAGE_INFO': 'SecondVillage/info',
    'SECOND_VILLAGE_VILLAGE_CREATED': 'SecondVillage/villageCreated',
    'SECOND_VILLAGE_VILLAGE_RENAMED': 'SecondVillage/renamed',

    'INVITE_FRIEND_INFO': 'InvitePlayer/info',
    'INVITE_FRIEND_INVITATION_SENT': 'InvitePlayer/invitationSent',

    // CRM
    'INTERSTITIALS_RECEIVED': 'Crm/interstitials',
    'INTERSTITIAL_REJECTED': 'Crm/interstitialRejected',
    'INTERSTITIAL_ACCEPTED': 'Crm/interstitialAccepted',

    'IGM_ACCEPTED': 'Crm/igmAccepted',
    // EFFECT
    'EFFECT_EFFECTS': 'Effect/effects',
    'EFFECT_CHANGED': 'Effect/changed',
    'EFFECT_EXPIRED': 'Effect/expired',

    // TUTORIAL
    'TUTORIAL_SKIPPED': 'Tutorial/skipped',

    // WHEEL EVENT
    'WHEEL_EVENT_INFO': 'WheelEvent/event',
    'WHEEL_EVENT_PROGRESS': 'WheelEvent/progress',
    'WHEEL_EVENT_SPUN': 'WheelEvent/spun',
    'WHEEL_EVENT_STARTED': 'WheelEvent/started',
    'WHEEL_EVENT_REFILLED': 'WheelEvent/refilled'
};