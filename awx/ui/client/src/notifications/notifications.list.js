/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/
 /**
  * This is the list definition for the notification templates list
  * used in the related tabs
  */

export default ['i18n', function(i18n){
    return {
        // These tooltip fields are consumed to build disabled related tabs tooltips in the form > add view
        dataPlacement: 'top',
        awToolTip: i18n._('Please save before adding notifications'),
        name:  'notifications' ,
        title: i18n._('Notifications'),
        iterator: 'notification',
        index: false,
        hover: false,
        emptyListText: "This list is populated by notification templates added from the&nbsp;<a ui-sref='notifications.add'>Notifications</a>&nbsp;section",
        basePath: 'notification_templates',
        fields: {
            name: {
                key: true,
                label: i18n._('Name'),
                columnClass: 'col-md-3 col-sm-9 col-xs-9',
                linkTo: '/#/notification_templates/{{notifier.id}}',
            },
            notification_type: {
                label: i18n._('Type'),
                searchType: 'select',
                searchOptions: [],
                excludeModal: true,
                columnClass: 'col-md-4 hidden-sm hidden-xs'
            },
            notification_templates_success: {
                label: i18n._('Success'),
                flag: 'notification_templates_success',
                type: "toggle",
                ngClick: "toggleNotification($event, notification.id, \"notification_templates_success\")",
                awToolTip: "{{ schedule.play_tip }}",
                dataTipWatch: "schedule.play_tip",
                dataPlacement: "right",
                searchable: false,
                nosort: true,
            },
            notification_templates_error: {
                label: i18n._('Failure'),
                columnClass: 'NotifierList-lastColumn',
                flag: 'notification_templates_error',
                type: "toggle",
                ngClick: "toggleNotification($event, notification.id, \"notification_templates_error\")",
                awToolTip: "{{ schedule.play_tip }}",
                dataTipWatch: "schedule.play_tip",
                dataPlacement: "right",
                searchable: false,
                nosort: true,
            }
        },
        actions: {
            add: {
                label: 'Add Notification',
                mode: 'all', // One of: edit, select, all
                ngClick: 'addNotificationTemplate()',
                awToolTip: i18n._('Create a new notification template'),
                actionClass: 'btn List-buttonSubmit',
                buttonContent: i18n._('&#43; ADD NOTIFICATION TEMPLATE'),
                ngShow: 'current_user.is_superuser || (current_user_admin_orgs && current_user_admin_orgs.length > 0)'
            }
        }

    };
}];
