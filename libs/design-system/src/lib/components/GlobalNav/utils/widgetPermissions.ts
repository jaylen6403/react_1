export enum WidgetPermissions {
  MenuCanViewLegacyDashboard = 'menu.can_view_legacy_dashboard',
  MenuCanViewLegacyNav = 'menu.can_view_legacy_nav',
  MenuLifecycleManager = 'menu.lifecycle_manager',
  MenuLifecycleManager2Beta = 'menu.lifecycle_manager_2_beta',
  MenuAdmin = 'menu.admin',
  MenuAdminUsers = 'menu.admin.users',
  MenuAdminReturnDescription = 'menu.admin.return_description_tool',
  MenuAdminWebContent = 'menu.admin.web_content',
  MenuAdminProgramIssuerMap = 'menu.admin.program_issuer_map',
  MenuAdminWebFocusListVideo = 'menu.admin.focus_list_video',
  MenuAdminMarketingEmailTrackingUpload = 'menu.admin.marketing_email_tracking_upload',
  MenuAdminAllMaturingProducts = 'menu.admin.all_maturing_products',
  MenuAdminComplianceTrainingsExport = 'menu.admin.compliance_trainings_export',
  MenuAdminCompanyRelationshipMapping = 'menu.admin.company_relationship_mapping',
  MenuAdminComparableStructureTypesConfiguration = 'menu.admin.comparable_structure_types_configuration',
  MenuAdminPCTIssuerPreferences = 'menu.admin.pct_issuer_preferences',
  MenuAdminPCTClientPreferences = 'menu.admin.pct_client_preferences',
  MenuAdminClients = 'menu.admin.clients',
  MenuAdminDailyOrdersExport = 'menu.admin.daily_orders_export',
  MenuAdminOrderEmailNotifications = 'menu.admin.order_email_notifications',
  MenuAdminHistoricalEmails = 'menu.admin.historical_emails',
  MenuAdminFileUpoad = 'menu.admin.file_upload',
  MenuAdminWholesalerDefinition = 'menu.admin.wholesaler_definition',
  MenuAdminWholesalerMapping = 'menu.admin.wholesaler_mapping',
  MenuCreationHubDataReporting = 'menu.creation_hub.data_reporting',
  MenuMarketplaceAnnuity = 'menu.marketplace.annuity',
  MenuMarketplaceAnnuityConfigureButton = 'menu.marketplace.annuity.configure.button',
  MenuMarketplaceAnnuityBuyButton = 'menu.marketplace.annuity.buy.button',
  MenuPmWholesalerMapping = 'menu.pm.wholesaler_mapping',
  MenuPmConfigurations = 'menu.pm_configurations',
  MenuPmConfigurationsKycRulesUpload = 'menu.pm_configurations_kyc_rules_upload', // todo: this is both kyc upload and validation upload
  MenuMarketplaceOrders = 'menu.marketplace.orders',
  MenuMarketplaceSettings = 'menu.marketplace.settings',
  MenuNotificationCenter = 'menu.notification_center',
  MenuSecondaries = 'menu.secondaries',
  SecondariesRFQCreate = 'secondaries.rfq.create',
  SecondariesRFQRespond = 'secondaries.rfq.respond',
  FormRedemptionEmail = 'form.redemption_email',
  CHDealDetailEditIssuerApproved = 'creation_hub.deal.detail.edit.issuer_approved',
  CHDealIssuer = 'creation_hub.deal.issuer',
  CHDealPag = 'creation_hub.deal.pag',
  CHDealCounterparty = 'creation_hub.deal.counterparty',
  CHDealClient = 'creation_hub.deal.client',
  AccessLearningCenter = 'access.learning_center_module',
  AccessLifecycleManagerAnnuities = 'access.lifecycle_manager_annuities',
  ProductCenter = 'menu.admin.product_center',
  MarketplaceRepFields = 'form.order.rep_fields',
  MarketplaceAdminFields = 'form.order.admin_fields',
  MarketplacePmFields = 'form.order.pm_fields',
  MarketplaceSalesFields = 'form.order.sales_fields',
  MarketplaceOverride = 'form.order.override',
  MarketplaceLnwOverride = 'form.order.liquid_net_worth_override',
  MarketplaceVisibility = 'marketplace.edit.visibility',
  MarketplaceOverrideBuy = 'marketplace.enable.override.buy',
  MarketplaceTomsExport = 'menu.pm_configurations_toms_export',
  MarketplaceBookBuildingEdit = 'form.order.book_building.edit',
  MarketplaceV2 = 'menu.marketplace.v2',
  ProductDetailsOrderTab = 'lifecyclemanager.product_details.orders',
  EmailCenterInbox = 'lifecyclemanager.email_center.tab',
  ProductMaintenance = 'menu.admin.product_maintenance',
  RangeToFinalAccess = 'menu.admin.product_maintenance.update_final_values',
  RangeToFinalSuperAccess = 'product_maintenance.update_final_values_superaccess',
  ProductMaintenanceProductEntry = 'menu.admin.product_maintenance.product_entry',
  ProductMaintenanceProductEntrySuper = 'product_maintenance.product_entry_superaccess',
  ProductMaintenanceProductEdit = 'menu.admin.product_maintenance.product_edit',
  ReviewQueueAccess = 'menu.admin.product_maintenance.review_queue',
  ICCAccess = 'menu.admin.product_maintenance.issuer_confirmation_creation',
  UBSAdmin = 'creation_hub.ubs.admin_access',
  UBSCreateProductRequestQuotes = 'creation_hub.ubs.create_product_request_quotes',
  UBSProceedToOffering = 'creation_hub.ubs.create_proceed_to_offering',
  UBSSelectOfferingScope = 'creation_hub.ubs.select_offering_scope',
  UBSSelectRegS = 'creation_hub.ubs.select_registration_type',
  UBSComplianceTrainingComplete = 'creation_hub.ubs.compliance_training_complete',
  LifecycleLimitedOrders = 'lifecycle_manager.limited_orders',
  CreationHubIssuer = 'menu.creation_hub_is_issuer',
  EventConfirmationsApprover = 'lifecycle_manager.approver_event_confirmations',
  EventConfirmationsIssuer = 'lifecycle_manager.issuer_event_confirmations',
}
