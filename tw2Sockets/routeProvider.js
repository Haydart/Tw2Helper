/*
 * Complete list of routes (game version v1.76)
 */

// noinspection BadExpressionStatementJS
injector.get('routeProvider') === {
    'STARTUP_LOG': {
        'type': 'System/startupTime',
        'data': ['startup_time', 'platform', 'device']
    },
    'SELECT_CHARACTER': {
        'type': 'Authentication/selectCharacter',
        'data': ['id', 'world_id', 'ref_param']
    },
    'SYSTEM_IDENTIFY': {
        'type': 'System/identify',
        'data': ['api_version', 'platform', 'device']
    },
    'SYSTEM_GET_TIME': {
        'type': 'System/getTime',
        'data': []
    },
    'CREATE_CHARACTER': {
        'type': 'Authentication/createCharacter',
        'data': ['world']
    },
    'TRIBE_GET_APPLICATION_TEMPLATE': {
        'type': 'Tribe/getApplicationTemplate',
        'data': ['tribe_id']
    },
    'TRIBE_CHANGE_APPLICATION_TEMPLATE': {
        'type': 'Tribe/changeApplicationTemplate',
        'data': ['template']
    },
    'PLAYER_RESET_PASSWORD': {
        'type': 'Player/resetPassword',
        'data': ['email']
    },
    'PLAYER_CHANGE_PASSWORD_AFTER_RESET': {
        'type': 'Player/changePassword',
        'data': ['player_id', 'pass', 'pass_repeat', 'token']
    },
    'PLAYER_EMAIL_GET_CONFIRMATION_PACKAGE': {
        'type': 'PlayerEmail/getConfirmationPackage',
        'data': []
    },
    'PLAYER_EMAIL_RESEND_WELCOME_MAIL': {
        'type': 'PlayerEmail/resendWelcomeMail',
        'data': []
    },
    'PLAYER_EMAIL_REQUEST_CHANGE': {
        'type': 'PlayerEmail/requestChange',
        'data': ['new_address']
    },
    'CHAR_CREATE_VILLAGE': {
        'type': 'Character/createVillage',
        'data': ['name', 'direction']
    },
    'CHAR_GET_INFO': {
        'type': 'Character/getInfo'
    },
    'CHAR_RESTART': {
        'type': 'Character/restart',
        'data': ['pass']
    },
    'CHAR_CHANGE_ROLE': {
        'type': 'Character/changeRole',
        'data': ['player_id', 'role']
    },
    'CHAR_GET_PROFILE': {
        'type': 'Character/getProfile',
        'data': ['character_id']
    },

    'CHAR_SET_PROFILE': {
        'type': 'Character/setProfile',
        'data': ['icon', 'title_id', 'achievements', 'text']
    },
    'CHAR_GET_TITLES': {
        'type': 'Character/getTitles'
    },
    'CHAR_GET_BASE_PROFILES': {
        'type': 'Character/getShortProfiles',
        'data': ['character_ids']
    },
    'LOGIN': {
        'type': 'Authentication/login',
        'data': ['name'] // and 'pass' or 'token'
    },
    'LOGOUT': {
        'type': 'Authentication/logout'
    },
    'RECONNECT': {
        'type': 'Authentication/reconnect',
        'data': ['name', 'token', 'character', 'world']
    },
    'MAP_SET_TUTORIAL_VILLAGE_LOCATION': {
        'type': 'Map/setTutorialVillageLocation',
        'data': ['village_id']
    },
    'MAP_GET_NEAREST_BARBARIAN_VILLAGE': {
        'type': 'Map/getNearestBarbarianVillage',
        'data': ['x', 'y']
    },
    'BARBARIAN_BOOST_PRODUCTION': {
        'type': 'Barbarian/boostProduction',
        'data': ['village_id', 'resource_type']
    },
    'MAP_RENAME_PROVINCE': {
        'type': 'Map/renameProvince',
        'data': ['province_id', 'name']
    },
    'MAP_GETPROVINCE': {
        'type': 'Map/getProvince',
        'data': ['x', 'y']
    },
    'MAP_GETVILLAGES': {
        'type': 'Map/getVillagesByArea',
        'data': ['x', 'y', 'width', 'height']
    },
    'MAP_GET_TRIBES_NEAR_VILLAGE': {
        'type': 'Map/getTribesNearVillage',
        'data': ['village_id']
    },
    'MAP_GET_VILLAGE_DETAILS': {
        'type': 'Map/getVillageDetails',
        'data': ['village_id']
    },
    'MAP_GET_KINGDOMS': {
        'type': 'Map/getKingdoms'
    },
    'MAP_GET_PROVINCE_CONFIG': {
        'type': 'Map/getProvinceConfig'
    },
    'BUILDING_GET_DATA': {
        'type': 'Building/getBuildings',
        'data': ['village_id']
    },
    'VILLAGE_GET_VILLAGE': {
        'type': 'Village/getVillage',
        'data': ['village_id']
    },
    'VILLAGE_BATCH_GET_VILLAGE_DATA': {
        'type': 'VillageBatch/getVillageData',
        'data': ['village_ids']
    },
    'VILLAGE_GET_BUILDING_QUEUE': {
        'type': 'Building/getQueue',
        'data': ['village_id']
    },
    'BUILDING_QUEUE_CANCEL_JOB': {
        'type': 'Building/cancelJob',
        'data': ['village_id', 'job_id', 'location']
    },
    'VILLAGE_WALL_INFO': {
        'type': 'Village/getWallInfo',
        'data': ['village_id']
    },
    'VILLAGE_UNIT_INFO': {
        'type': 'Village/getUnitInfo',
        'data': ['village_id']
    },
    'VILLAGE_UPGRADE_BUILDING': {
        'type': 'Building/upgrade',
        'data': ['village_id', 'building', 'premium', 'location']
    },
    'VILLAGE_STORAGE_INFO': {
        'type': 'Village/getStorageInfo',
        'data': ['village_id']
    },
    'VILLAGE_RESEARCH_UNLOCK': {
        'type': 'Research/unlock',
        'data': ['village_id', 'research_type']
    },
    'VILLAGE_FARM_INFO': {
        'type': 'Village/getFarmInfo',
        'data': ['village_id']
    },
    'REGISTER': {
        'type': 'Authentication/register',
        'data': ['name', 'mail', 'pass', 'pass_wh', 'agb', 'platform', 'portal_data', 'invite_key']
    },

    'VILLAGES_IN_PROVINCE': {
        'type': 'Village/getSameProvinceVillages',
        'data': ['village_id']
    },
    'VILLAGE_CHANGE_NAME': {
        'type': 'Village/changeName',
        'data': ['village_id', 'name']
    },
    'GAME_DATA_BATCH_GET_GAME_DATA': {
        'type': 'GameDataBatch/getGameData'
    },
    'VILLAGE_RESOURCE_INFO': {
        'type': 'Village/getResourceInfo',
        'data': ['village_id']
    },
    'GLOBAL_INFORMATION': {
        'type': 'GlobalInformation/getInfo'
    },
    //coop
    'COOP_GET_STATUS': {
        'type': 'Coop/getCoopStatus'
    },
    'COOP_ACCEPT_INVITATION': {
        'type': 'Coop/acceptInvitation',
        'data': ['invitation_id']
    },
    'COOP_DECLINE_INVITATION': {
        'type': 'Coop/declineInvitation',
        'data': ['invitation_id']
    },
    'COOP_LEAVE_CHARACTER': {
        'type': 'Coop/leaveCharacter',
        'data': ['character_id']
    },
    'COOP_INVITE_PLAYER': {
        'type': 'Coop/invitePlayer',
        'data': ['character_id']
    },
    'COOP_REMOVE_PLAYER': {
        'type': 'Coop/removePlayer',
        'data': ['player_id']
    },
    'COOP_WITHDRAW_INVITATION': {
        'type': 'Coop/withdrawInvitation',
        'data': ['invitation_id']
    },
    // Timeline
    'TIMELINE_GET_EVENTS': {
        'type': 'Timeline/listEvents',
        'data': ['village_id']
    },
    'TIMELINE_GET_DETAILS': {
        'type': 'Timeline/getEventDetails',
        'data': ['event_type', 'event_id', 'village_id']
    },
    // Hospital Screen
    'HOSPITAL_GET_PATIENTS': {
        'type': 'Hospital/getPatients',
        'data': ['village_id']
    },
    'HOSPITAL_RELEASE_PATIENT': {
        'type': 'Hospital/release',
        'data': ['village_id', 'patient_id']
    },
    // Unit Screen
    'VILLAGE_GET_UNITSCREEN_INFO': {
        'type': 'Unit/getUnitScreenInfo',
        'data': ['village_id']
    },
    'UNITSCREEN_SEND_SURPLUS_BACK': {
        'type': 'Unit/sendSurplusBack',
        'data': ['village_id']
    },
    'COMMAND_WITHDRAWSUPPORT': {
        'type': 'Command/withdrawSupport',
        'data': ['id', 'units']
    },
    'COMMAND_WITHDRAW_ALL_SUPPORT_FROM_VILLAGE': {
        'type': 'Command/withdrawCompleteSupport',
        'data': ['village_id']
    },
    'COMMAND_SEND_SUPPORT_BACK': {
        'type': 'Command/sendSupportBack',
        'data': ['id', 'units']
    },
    'COMMAND_IGNORE': {
        'type': 'Command/ignore',
        'data': ['command_id']
    },
    // Report routes
    'REPORT_GET_LIST_REVERSE': {
        'type': 'Report/getListReverse',
        'data': ['offset', 'count', 'opt_filters', 'query', 'types']
    },
    'REPORT_MARK_FAVOURITE': {
        'type': 'Report/markFav',
        'data': ['ids']
    },
    'REPORT_UNMARK_FAVOURITE': {
        'type': 'Report/unmarkFav',
        'data': ['ids']
    },
    'REPORT_GET': {
        'type': 'Report/get',
        'data': ['id']
    },
    'REPORT_GET_BY_TOKEN': {
        'type': 'Report/getByToken',
        'data': ['token']
    },
    'REPORT_DELETE': {
        'type': 'Report/delete',
        'data': ['reports']
    },
    'REPORT_MARK_READ': {
        'type': 'Report/markRead',
        'data': ['reports']
    },
    'REPORT_MARK_UNREAD': {
        'type': 'Report/markUnread',
        'data': ['reports']
    },
    'REPORT_MARK_SEEN': {
        'type': 'Report/markSeen',
        'data': ['ids']
    },
    'REPORT_GET_SETTINGS': {
        'type': 'Report/getSettings'
    },
    'REPORT_SET_SETTINGS': {
        'type': 'Report/setSettings',
        'data': ['settings']
    },
    'REPORT_DELETE_ALL': {
        'type': 'Report/deleteAll',
        'data': []
    },

    // Army routes
    'GET_PRESETS_FOR_VILLAGE': {
        'type': 'ArmyPreset/getForVillage',
        'data': ['village_id']
    },
    'GET_PRESETS': {
        'type': 'ArmyPreset/getPresetList'
    },
    'SEND_PRESET': {
        'type': 'Command/sendPreset',
        'data': ['start_village', 'target_village', 'army_preset_id', 'type']
    },
    'SEND_CUSTOM_ARMY': {
        'type': 'Command/sendCustomArmy',
        'data': ['start_village', 'target_village', 'type', 'units', 'catapult_target', 'officers']
    },
    'SAVE_EXISTING_PRESET': {
        'type': 'ArmyPreset/save',
        'data': ['preset_id', 'name', 'icon', 'officers', 'units']
    },
    'DELETE_PRESET': {
        'type': 'ArmyPreset/delete',
        'data': ['id']
    },
    'SAVE_NEW_PRESET': {
        'type': 'ArmyPreset/create',
        'data': ['village_id', 'name', 'icon', 'officers', 'units']
    },
    'RECRUIT_PRESET': {
        'type': 'Unit/recruitPreset',
        'data': ['village_id', 'preset_id']
    },
    'UNIT_MASS_RECRUITING': {
        'type': 'Unit/massRecruiting',
        'data': ['units', 'village_ids']
    },
    'ASSIGN_PRESETS': {
        'type': 'ArmyPreset/assign',
        'data': ['village_id', 'preset_ids']
    },
    'GET_ATTACKING_FACTOR': {
        'type': 'Command/getAttackingFactor',
        'data': ['target_id']
    },
    'GET_OWN_COMMANDS': {
        'type': 'Command/getOwnCommands',
        'data': ['village_id']
    },
    'COMMAND_CANCEL': {
        'type': 'Command/cancel',
        'data': ['command_id']
    },
    /*ACADEMY */
    'ACADEMY_GET_INFO': {
        'type': 'Academy/getInfo',
        'data': ['village_id']
    },
    'MINT_COINS': {
        'type': 'Academy/mintCoins',
        'data': ['village_id', 'amount']
    },
    'MASS_MINT_COINS': {
        'type': 'Academy/massMintCoins',
        'data': ['villages']
    },
    'GET_TRAINING': {
        'type': 'Academy/getTraining',
        'data': ['village_id']
    },
    'GET_CHARACTER_VILLAGES': {
        'type': 'Village/getCharacterVillages'
    },
    /* PRECEPTORY */
    'PRECEPTORY_SELECT_ORDER': {
        'type': 'Preceptory/selectOrder',
        'data': ['village_id', 'order']
    },
    'PRECEPTORY_RESET_ORDER': {
        'type': 'Preceptory/resetOrder',
        'data': ['village_id', 'premium']
    },

    'BARRACKS_RECRUIT': {
        'type': 'Barracks/recruit',
        'data': ['village_id', 'unit_type', 'amount']
    },
    'ACADEMY_RECRUIT': {
        'type': 'Academy/recruit',
        'data': ['village_id', 'unit_type', 'amount']
    },
    /* Ranking */

    'RANKING_CHARACTER': {
        'type': 'Ranking/getCharacterRanking',
        'data': ['area_type', 'offset', 'count', 'order_by', 'order_dir']
    },
    'RANKING_TRIBE': {
        'type': 'Ranking/getTribeRanking',
        'data': ['area_type', 'offset', 'count', 'order_by', 'order_dir']
    },
    /* Statue and Paladin*/
    'STATUE_RECRUIT': {
        'type': 'Statue/recruit',
        'data': ['village_id', 'unit_type', 'amount']
    },
    'PALADIN_GET_INFO': {
        'type': 'Paladin/getInfo',
        'data': []
    },
    'SHOP_GET_PREMIUM_OFFERS': {
        'type': 'Premium/listItems',
        'data': []
    },
    'PALADIN_RENAME': {
        'type': 'Paladin/rename',
        'data': ['name']
    },
    'PALADIN_EQUIP_ITEM': {
        'type': 'Paladin/equipItem',
        'data': ['item']
    },
    'PALADIN_UNLOCK_NEXT_ITEM_LEVEL': {
        'type': 'Paladin/unlockNextItemLevel',
        'data': ['item']
    },
    'PALADIN_RECRUIT_INSTANTLY': {
        'type': 'Paladin/summonInstantly',
        'data': ['village_id']
    },
    'PRECEPTORY_RECRUIT': {
        'type': 'Preceptory/recruit',
        'data': ['village_id', 'unit_type', 'amount']
    },
    'PRECEPTORY_CANCEL_RECRUIT_JOB': {
        'type': 'Preceptory/cancelRecruitJob',
        'data': ['village_id', 'job_id']
    },
    'ACADEMY_CANCEL_RECRUIT_JOB': {
        'type': 'Academy/cancelRecruitJob',
        'data': ['village_id', 'job_id']
    },
    'BARRACKS_CANCEL_RECRUIT_JOB': {
        'type': 'Barracks/cancelRecruitJob',
        'data': ['job_id', 'village_id']
    },
    'STATUE_CANCEL_RECRUIT_JOB': {
        'type': 'Statue/cancelRecruitJob',
        'data': ['village_id', 'job_id']
    },
    'NOTIFICATION_MARK_READ': {
        'type': 'Notification/markRead',
        'data': ['id']
    },
    'NOTIFICATION_GET_NOTIFICATIONS': {
        'type': 'Notification/getNotifications',
        'data': []
    },
    'AUTOCOMPLETE': {
        'type': 'Autocompletion/autocomplete',
        'data': ['string', 'amount', 'types']
    },
    /* MESSAGING */
    'MESSAGE_SEND': {
        'type': 'Message/write',
        'data': ['to', 'title', 'message']
    },
    'MESSAGE_GET_LIST': {
        'type': 'Message/getList',
        'data': ['folder', 'offset', 'count', 'search']
    },
    'MESSAGE_GET': {
        'type': 'Message/get',
        'data': ['message_id', 'offset', 'count', 'reverse']
    },
    'MESSAGE_REPLY': {
        'type': 'Message/reply',
        'data': ['message_id', 'message']
    },
    'MESSAGE_ADD_PARTICIPANTS': {
        'type': 'Message/addParticipants',
        'data': ['message_id', 'entities']
    },
    'MESSAGE_KICK': {
        'type': 'Message/kick',
        'data': ['message_id', 'character_id']
    },
    'MESSAGE_MOVE_TO_FOLDER': {
        'type': 'Message/changeFolder',
        'data': ['message_ids', 'new_folder']
    },
    'MESSAGE_DELETE': {
        'type': 'Message/delete',
        'data': ['message_ids']
    },
    'MESSAGE_FORWARD': {
        'type': 'Message/forward',
        'data': ['to', 'title', 'message', 'message_ids']
    },

    'MESSAGE_MARK_READ': {
        'type': 'Message/markRead',
        'data': ['message_ids']
    },

    'MESSAGE_MARK_UNREAD': {
        'type': 'Message/unmarkRead',
        'data': ['message_ids']
    },

    'MESSAGE_LEAVE': {
        'type': 'Message/leave',
        'data': ['message_id']
    },

    'FRIENDLIST_GET': {
        'type': 'Friendlist/get',
        'data': ['offset', 'count']
    },
    'FRIENDLIST_ADD': {
        'type': 'Friendlist/add',
        'data': ['type', 'id']
    },
    'FRIENDLIST_REMOVE': {
        'type': 'Friendlist/remove',
        'data': ['type', 'id']
    },


    /* SCOUTING */
    'SCOUTING_GET_INFO': {
        'type': 'Scouting/getInfo',
        'data': ['village_id']
    },
    'SCOUTING_RECRUIT': {
        'type': 'Scouting/recruit',
        'data': ['village_id', 'slot']
    },
    'SCOUTING_CANCEL_RECRUIT': {
        'type': 'Scouting/cancelProduction',
        'data': ['village_id', 'slot']
    },
    'SCOUTING_SET_COUNTER_MEASURE': {
        'type': 'Scouting/setCounterMeasure',
        'data': ['village_id', 'type', 'status', 'building', 'level', 'unit', 'replacement']
    },
    'SCOUTING_SEND_COMMAND': {
        'type': 'Scouting/sendCommand',
        'data': ['startVillage', 'targetVillage', 'spys', 'type']
    },
    'SCOUTING_CANCEL_COMMAND': {
        'type': 'Scouting/cancelCommand',
        'data': ['command_id']
    },

    /* TRADING */
    'TRADING_SEND_RESOURCES': {
        'type': 'Trading/sendResources',
        'data': ['start_village', 'target_village', 'wood', 'clay', 'iron']
    },
    'TRADING_GET_TRANSPORTS': {
        'type': 'Trading/getTransports',
        'data': ['village_id', 'count', 'offset', 'ordered_by', 'order']
    },
    'TRADING_CANCEL_TRANSPORT': {
        'type': 'Trading/cancelTransport',
        'data': ['transport_id']
    },
    'TRADING_GET_MERCHANT_STATUS': {
        'type': 'Trading/getMerchantStatus',
        'data': ['village_id']
    },
    'TRADING_LIST_OFFERS': {
        'type': 'Trading/listOffers',
        'data': ['village_id', 'offset', 'count', 'ordered_by', 'order', 'filters']
    },
    'TRADING_CREATE_OFFER': {
        'type': 'Trading/createOffer',
        'data': ['village_id', 'offered_type', 'offered_amount', 'requested_type', 'requested_amount', 'offer_amount', 'max_delivery_time']
    },
    'TRADING_REMOVE_OFEER': {
        'type': 'Trading/removeOffer',
        'data': ['offer_id']
    },
    'TRADING_ACCEPT_OFEER': {
        'type': 'Trading/acceptOffer',
        'data': ['village_id', 'offer_id', 'offer_amount']
    },

    /* TRIBE */
    'TRIBE_INVITATION_GET_OWN': {
        'type': 'TribeInvitation/getOwnInvitations'
    },
    'TRIBE_INVITATION_CREATE': {
        'type': 'TribeInvitation/create',
        'data': ['character_name']
    },
    'TRIBE_INVITATION_REJECT': {
        'type': 'TribeInvitation/reject',
        'data': ['id']
    },
    'TRIBE_INVITATION_ABORT': {
        'type': 'TribeInvitation/abort',
        'data': ['id']
    },
    'TRIBE_INVITATION_ACCEPT': {
        'type': 'TribeInvitation/accept',
        'data': ['id']
    },
    'TRIBE_APPLICATION_GET_OWN': {
        'type': 'TribeApplication/getOwnApplications'
    },
    'TRIBE_APPLICATION_ACCEPT': {
        'type': 'TribeApplication/accept',
        'data': ['id']
    },
    'TRIBE_APPLICATION_CREATE': {
        'type': 'TribeApplication/create',
        'data': ['tribe_id', 'message']
    },
    'TRIBE_APPLICATION_REJECT': {
        'type': 'TribeApplication/reject',
        'data': ['id']
    },
    'TRIBE_APPLICATION_ABORT': {
        'type': 'TribeApplication/abort',
        'data': ['id']
    },
    'TRIBE_CREATE': {
        'type': 'Tribe/create',
        'data': ['name', 'tag']
    },
    'TRIBE_GET_PROFILE': {
        'type': 'Tribe/getProfile',
        'data': ['tribe_id']
    },
    'TRIBE_LEAVE': {
        'type': 'Tribe/leave'
    },
    'TRIBE_CHANGE_PROFILE': {
        'type': 'Tribe/changeProfile',
        'data': ['description']
    },
    'TRIBE_SELECT_ACHIEVEMENTS': {
        'type': 'Tribe/selectAchievements',
        'data': ['achievements']
    },
    'TRIBE_SET_MEMBER_TITLE': {
        'type': 'Tribe/setMemberTitle',
        'data': ['member_id', 'title']
    },
    'TRIBE_SET_MEMBER_RIGHTS': {
        'type': 'Tribe/setMemberRights',
        'data': ['member_id', 'rights']
    },
    'TRIBE_SET_MEMBER_TRUSTED': {
        'type': 'Tribe/setMemberTrusted',
        'data': ['member_id', 'trusted']
    },
    'TRIBE_CHANGE_ICON': {
        'type': 'Tribe/changeIcon',
        'data': ['icon']
    },
    'TRIBE_DISBAND': {
        'type': 'Tribe/disband'
    },
    'TRIBE_GET_LOG': {
        'type': 'Tribe/getLog',
        'data': ['start', 'count']
    },
    'TRIBE_CHANGE_SETTINGS': {
        'type': 'Tribe/changeSettings',
        'data': ['opt_name', 'opt_tag', 'opt_allow_applications', 'opt_set_open', 'opt_icon', 'opt_achievements', 'opt_description', 'opt_min_points']
    },
    'TRIBE_JOIN': {
        'type': 'Tribe/join',
        'data': ['tribe_id']
    },
    'TRIBE_CHANGE_WELCOME_MESSAGE': {
        'type': 'Tribe/changeWelcomeMessage',
        'data': ['message']
    },
    'TRIBE_RELATION_GET_LIST': {
        'type': 'TribeRelation/getList'
    },
    'TRIBE_RELATION_CHANGE': {
        'type': 'TribeRelation/change',
        'data': ['tribe_tag', 'relation']
    },
    'TRIBE_GET_MEMBERLIST': {
        'type': 'Tribe/getMemberList',
        'data': ['tribe']
    },
    'TRIBE_GET_RIGHT_PRESETS': {
        'type': 'Tribe/getRightPresets'
    },
    'TRIBE_INVITATION_GET_TRIBE_INVITATIONS': {
        'type': 'TribeInvitation/getTribeInvitations'
    },
    'TRIBE_APPLICATION_GET_TRIBE_APPLICATIONS': {
        'type': 'TribeApplication/getTribeApplications'
    },
    'TRIBE_KICK_MEMBER': {
        'type': 'Tribe/kickMember',
        'data': ['id']
    },
    'TRIBE_GET_WELCOME_MESSAGE': {
        'type': 'Tribe/getWelcomeMessage'
    },
    'TRIBE_SET_FOUNDER': {
        'type': 'Tribe/passFounder',
        'data': ['new_founder_id']
    },
    /* FORUM */
    'FORUM_LIST_FORUMS': {
        'type': 'Forum/listForums'
    },
    'FORUM_CREATE_FORUM': {
        'type': 'Forum/createForum',
        'data': ['name']
    },
    'FORUM_LIST_THREADS': {
        'type': 'Forum/listThreads',
        'data': ['forum_id', 'offset', 'count']
    },
    'FORUM_CREATE_THREAD': {
        'type': 'Forum/createThread',
        'data': ['forum_id', 'name', 'text']
    },
    'FORUM_DELETE_FORUM': {
        'type': 'Forum/deleteForum',
        'data': ['forum_id']
    },
    'FORUM_SET_ORDER': {
        'type': 'Forum/setOrder',
        'data': ['order']
    },
    'FORUM_LIST_POSTS': {
        'type': 'Forum/listPosts',
        'data': ['thread_id', 'offset', 'count', 'reverse']
    },
    'FORUM_CREATE_POST': {
        'type': 'Forum/createPost',
        'data': ['thread_id', 'text']
    },
    'FORUM_DELETE_POST': {
        'type': 'Forum/deletePost',
        'data': ['post_id', 'thread_id']
    },
    'FORUM_EDIT_POST': {
        'type': 'Forum/editPost',
        'data': ['post_id', 'text']
    },
    'FORUM_RENAME_THREAD': {
        'type': 'Forum/renameThread',
        'data': ['thread_id', 'name']
    },
    'FORUM_MARK_THREADS_READ': {
        'type': 'Forum/markThreadsRead',
        'data': ['thread_ids', 'forum_id']
    },
    'FORUM_MARK_THREADS_UNREAD': {
        'type': 'Forum/markThreadsUnread',
        'data': ['thread_ids', 'forum_id']
    },
    'FORUM_PIN_THREADS': {
        'type': 'Forum/pinThreads',
        'data': ['thread_ids', 'forum_id']
    },
    'FORUM_UNPIN_THREADS': {
        'type': 'Forum/unpinThreads',
        'data': ['thread_ids', 'forum_id']
    },
    'FORUM_CLOSE_THREADS': {
        'type': 'Forum/closeThreads',
        'data': ['thread_ids', 'forum_id']
    },
    'FORUM_REOPEN_THREADS': {
        'type': 'Forum/reopenThreads',
        'data': ['thread_ids', 'forum_id']
    },
    'FORUM_MARK_FORUM_READ': {
        'type': 'Forum/markForumRead',
        'data': ['forum_id']
    },
    'FORUM_MARK_FORUM_UNREAD': {
        'type': 'Forum/markForumUnread',
        'data': ['forum_id']
    },
    'FORUM_DELETE_THREADS': {
        'type': 'Forum/deleteThreads',
        'data': ['forum_id', 'thread_ids']
    },
    'FORUM_RENAME_FORUM': {
        'type': 'Forum/renameForum',
        'data': ['forum_id', 'name']
    },
    'FORUM_MOVE_THREADS': {
        'type': 'Forum/moveThreads',
        'data': ['forum_id', 'thread_ids', 'target_forum_id']
    },

    /* ACHIEVEMENT */
    'ACHIEVEMENT_GET_ACHIEVED': {
        'type': 'Achievement/getAchieved',
        'data': ['character_id']
    },
    'ACHIEVEMENT_GET_TRIBE_ACHIEVEMENTS': {
        'type': 'Achievement/getTribeAchievements',
        'data': ['tribe_id']
    },
    'ACHIEVEMENT_GET_CHAR_ACHIEVEMENTS': {
        'type': 'Achievement/getCharacterAchievements',
        'data': ['character_id']
    },

    /* PREMIUM */

    'GET_INVENTORY': {
        'type': 'Premium/listItems'
    },
    'INVENTORY_MARK_SEEN': {
        'type': 'Premium/markSeen'
    },
    'PREMIUM_LIST_SHOP_OFFERS': {
        'type': 'Premium/listShopOffers'
    },
    'PREMIUM_BUY_ITEM': {
        'type': 'Premium/buyItem',
        'data': ['offer_id']
    },
    'PREMIUM_USE_ITEM': {
        'type': 'Premium/useItem',
        'data': ['village_id', 'item_id']
    },
    'PREMIUM_GET_IFRAME_URL': {
        'type': 'Premium/getPaymentIframe'
    },
    'PREMIUM_BUY_BUILDQUEUE_SLOT': {
        'type': 'Village/buyBuildQueueSlot',
        'data': ['village_id']
    },
    'PREMIUM_BOOST_PRODUCTION': {
        'type': 'Village/boostProduction',
        'data': ['village_id', 'resource_type']
    },
    'PREMIUM_INSTANT_BUILD': {
        'type': 'Building/completeInstantly',
        'data': ['village_id', 'location', 'job_id', 'price']
    },
    'PREMIUM_INSTANT_RECRUIT_BARRACKS': {
        'type': 'Barracks/completeInstantly',
        'data': ['village_id', 'job_id']
    },
    'PREMIUM_INSTANT_RECRUIT_ACADEMY': {
        'type': 'Academy/completeInstantly',
        'data': ['village_id', 'job_id']
    },
    'PREMIUM_INSTANT_RECRUIT_PRECEPTORY': {
        'type': 'Preceptory/completeInstantly',
        'data': ['village_id', 'job_id']
    },
    'PREMIUM_SECOND_QUEUE_JOB_BARRACKS': {
        'type': 'Barracks/startSecondJob',
        'data': ['village_id', 'job_id']
    },

    'PREMIUM_SECOND_QUEUE_JOB_PRECEPTORY': {
        'type': 'Preceptory/startSecondJob',
        'data': ['village_id', 'job_id']
    },
    'PREMIUM_INSTANT_TRADE': {
        'type': 'Trading/instantTrade',
        'data': ['village_id', 'resource_pay', 'resource_get', 'amount']
    },
    'PREMIUM_INSTANT_TRANSPORT': {
        'type': 'Trading/instantTransport',
        'data': ['transport_id']
    },

    /* Daily Unit Deal */
    'PREMIUM_DAILY_UNIT_DEAL_GET_OFFERS': {
        'type': 'DailyUnitDeal/getOffers',
        'data': ['village_id']
    },
    'PREMIUM_DAILY_UNIT_DEAL_ACCEPT': {
        'type': 'DailyUnitDeal/accept',
        'data': ['village_id', 'slot']
    },
    'PREMIUM_DAILY_UNIT_DEAL_REROLL': {
        'type': 'DailyUnitDeal/reroll',
        'data': ['village_id']
    },

    /* Resource Deposit */
    'RESOURCE_DEPOSIT_GET_INFO': {
        'type': 'ResourceDeposit/getInfo'
    },
    'PREMIUM_RESOURCE_DEPOSIT_REROLL': {
        'type': 'ResourceDeposit/reroll'
    },
    'RESOURCE_DEPOSIT_START_JOB': {
        'type': 'ResourceDeposit/startJob',
        'data': ['job_id']
    },
    'RESOURCE_DEPOSIT_COLLECT': {
        'type': 'ResourceDeposit/collect',
        'data': ['job_id', 'village_id']
    },
    'RESOURCE_DEPOSIT_OPEN': { // same as RESOURCE_DEPOSIT_GET_INFO incl. backend quest tracking
        'type': 'ResourceDeposit/open'
    },
    'SETTINGS_GET_ACCOUNT_INFO': {
        'type': 'Settings/getAccountInfo'
    },
    'SETTINGS_CHANGE_PASSWORD': {
        'type': 'Settings/changePassword',
        'data': ['old_pass', 'pass', 'pass_repeat']
    },
    /* QUESTS */
    'QUESTS_GET_QUEST_LINES': {
        'type': 'Quest/getQuestLines'
    },
    'QUEST_FINISH_QUEST': {
        'type': 'Quest/close',
        'data': ['quest_id', 'village_id']
    },
    'QUEST_REFRESH_GOALS': {
        'type': 'Quest/refreshGoals'
    },
    'QUEST_MARK_READ': {
        'type': 'Quest/markRead',
        'data': ['quest_id']
    },
    /* GROUP */
    'GROUPS_GET_INDEX': {
        'type': 'Group/getGroups'
    },
    'GROUPS_CREATE': {
        'type': 'Group/create',
        'data': ['name', 'icon']
    },
    'GROUPS_UPDATE': {
        'type': 'Group/update',
        'data': ['id', 'name', 'icon']
    },
    'GROUPS_DESTROY': {
        'type': 'Group/delete',
        'data': ['id']
    },
    'GROUPS_GET_VILLAGES': {
        'type': 'Icon/getVillages'
    },
    'GROUPS_LINK_VILLAGE': {
        'type': 'Group/link',
        'data': ['group_id', 'village_id']
    },
    'GROUPS_UNLINK_VILLAGE': {
        'type': 'Group/unlink',
        'data': ['group_id', 'village_id']
    },
    /* OVERVIEW */
    'OVERVIEW_GET_VILLAGES': {
        'type': 'Overview/getVillages',
        'data': ['count', 'offset', 'sorting', 'reverse', 'groups']
    },
    'OVERVIEW_GET_INCOMING': {
        'type': 'Overview/getIncoming',
        'data': ['count', 'offset', 'sorting', 'reverse', 'groups', 'command_types', 'villages']
    },
    'OVERVIEW_GET_COMMANDS': {
        'type': 'Overview/getCommands',
        'data': ['count', 'offset', 'sorting', 'reverse', 'groups', 'command_types', 'villages', 'directions']
    },
    'OVERVIEW_GET_UNITS': {
        'type': 'Overview/getUnits',
        'data': ['count', 'offset', 'sorting', 'reverse', 'groups']
    },
    'COMMAND_RENAME': {
        'type': 'Command/rename',
        'data': ['command_id', 'name']
    },

    /* TUTORIAL */
    'TUTORIAL_COMPLETE_TASK': {
        'type': 'Tutorial/completeTask'
    },
    'TUTORIAL_START_TASK': {
        'type': 'Tutorial/startTask'
    },
    'TUTORIAL_GET_CURRENT_TASK': {
        'type': 'Tutorial/getCurrentTask'
    },
    'TUTORIAL_SKIP': {
        'type': 'Tutorial/skip'
    },
    'TUTORIAL_START': {
        'type': 'Tutorial/start'
    },
    'TUTORIAL_GET_VILLAGE_TO_ATTACK': {
        'type': 'Tutorial/getVillageToAttack',
        'data': ['x', 'y']
    },

    /* WAREHOUSE */
    'WAREHOUSE_BOOST_PROTECTION': {
        'type': 'Warehouse/boostProtection',
        'data': ['village_id']
    },

    /* CLOSED BETA */
    'CLOSED_BETA_REGISTER': {
        'type': 'ClosedBeta/register',
        'data': ['name', 'email', 'password', 'ref_param', 'portal_data']
    },
    'CLOSED_BETA_ENTER': {
        'type': 'ClosedBeta/enter',
        'data': ['key']
    },
    'SUPPORT_GET_URL': {
        'type': 'Support/getSupportURL'
    },

    /* TrackingSnippets */
    'TRACKING_SNIPPET_GET_VALID': {
        'type': 'TrackingSnippet/getIngame',
        'data': ['email']
    },
    'TRACKING_SNIPPET_CONFIRM_EVENT': {
        'type': 'TrackingSnippet/confirmEventSnippet'
    },

    'TRACKING_AUTH_LOGIN_COMPLETE': {
        'type': 'Authentication/completeLogin'
    },

    'TRACKING_AUTH_LEAVE_WORLD': {
        'type': 'Authentication/leaveWorld'
    },

    'TRACK_EVENT': {
        'type': 'EventTracking/sendEvent',
        'data': ['category', 'event_name', 'tracking_data']
    },

    /* WORLD */
    'WORLD_GET_FOR_PLAYER': {
        'type': 'World/getForPlayer'
    },

    /* CHAT */
    /*'CHAT_SEND_GLOBAL': {
        'type': 'Chat/global',
        'data': ['message', 'character_name']
    },*/
    'CHAT_SEND_TRIBE': {
        'type': 'Chat/tribe',
        'data': ['message', 'character_name']
    },
    'CHAT_GET_TRIBE_HISTORY': {
        'type': 'Chat/getTribeChatHistory',
        'data': []
    },

    /* DAILY LOGIN BONUS */
    'DAILY_LOGIN_BONUS_GET_INFO': {
        'type': 'DailyLoginBonus/getInfo'
    },
    'DAILY_LOGIN_BONUS_CLAIM_REWARD': {
        'type': 'DailyLoginBonus/claimReward'
    },

    /* SECOND VILLAGE FEATURE */
    'SECOND_VILLAGE_GET_INFO': {
        'type': 'SecondVillage/getInfo'
    },
    'SECOND_VILLAGE_OPEN': {
        'type': 'SecondVillage/open'
    },
    'SECOND_VILLAGE_START_JOB': {
        'type': 'SecondVillage/startJob',
        'data': ['job_id', 'village_id']
    },
    'SECOND_VILLAGE_COLLECT_JOB_REWARD': {
        'type': 'SecondVillage/collectJobReward',
        'data': ['job_id', 'village_id']
    },
    'SECOND_VILLAGE_RENAME': {
        'type': 'SecondVillage/rename',
        'data': ['new_name']
    },
    'SECOND_VILLAGE_FINISH_VILLAGE': {
        'type': 'SecondVillage/finishVillage',
        'data': []
    },

    'INVITE_FRIEND_GET_INFO': {
        'type': 'InvitePlayer/getInfo',
        'data': []
    },

    'INVITE_FRIEND_SEND_INVITE': {
        'type': 'InvitePlayer/sendInvitation',
        'data': ['email', 'invitee_name', 'inviter_name', 'message', 'consent', 'x', 'y']
    },

    // CRM
    'GET_INTERSTITIALS': {
        'type': 'Crm/getInterstitials',
        'data': ['device_type']
    },
    'ACCEPT_INTERSTITIAL': {
        'type': 'Crm/acceptInterstitial',
        'data': ['campaign_id']
    },
    'REJECT_INTERSTITIAL': {
        'type': 'Crm/rejectInterstitial',
        'data': ['campaign_id']
    },
    'ACCEPT_IGM': {
        'type': 'Crm/acceptIgm',
        'data': ['campaign_id']
    },

    // EFFECT
    'EFFECT_GET_EFFECTS': {
        'type': 'Effect/getEffects',
        'data': []
    },


    // TRIBE SKILLS
    'TRIBE_SKILL_DONATE': {
        'type': 'TribeSkill/donate',
        'data': [
            'village_id',
            'crowns',
            'resources'
        ]
    },

    'TRIBE_SKILL_GET_DONATION_RANKING': {
        'type': 'TribeSkill/getHonorRanking',
        'data': []
    },
    'TRIBE_SKILL_ASSIGN_SKILL_POINTS': {
        'type': 'TribeSkill/assign',
        'data': ['points']
    },
    'TRIBE_SKILL_REASSIGN_SKILL_POINTS': {
        'type': 'TribeSkill/reassign',
        'data': ['points']
    },
    'TRIBE_SKILL_DONATE_MASS': {
        'type': 'TribeSkill/massDonating',
        'data': ['villages']
    },
    'TRIBE_SKILLS_GET_INFO': {
        'type': 'TribeSkill/getInfo',
        'data': []
    },

    // GWENDOLINE WHEEL
    'WHEEL_EVENT_GET_EVENT': {
        'type': 'WheelEvent/getEvent',
        'data': []
    },
    'WHEEL_EVENT_GET_PROGRESS': {
        'type': 'WheelEvent/getProgress',
        'data': ['event_id']
    },
    'WHEEL_EVENT_START_EVENT': {
        'type': 'WheelEvent/startEvent',
        'data': ['event_id']
    },
    'WHEEL_EVENT_SPIN': {
        'type': 'WheelEvent/spin',
        'data': ['event_id', 'price']
    },
    'WHEEL_EVENT_REFILL': {
        'type': 'WheelEvent/refill',
        'data': ['event_id', 'price']
    }
};