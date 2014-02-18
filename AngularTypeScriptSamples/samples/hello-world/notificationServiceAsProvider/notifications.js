/// <reference path="notificationsArchiveContract.ts"/>
var NotificationsModule;
(function (NotificationsModule) {
    var NotificationsService = (function () {
        function NotificationsService(notificationsArchive, MAX_LEN) {
            this.notificationsArchive = notificationsArchive;
            this.maxLen = 10;
            this.notifications = [];
            this.maxLen = MAX_LEN;
        }
        NotificationsService.Factory = function (notificationsArchive, MAX_LEN) {
            return new NotificationsService(notificationsArchive, MAX_LEN);
        };

        NotificationsService.prototype.push = function (notification) {
            var notificationToArchive;
            var newLen = this.notifications.unshift(notification);
            if (newLen > this.maxLen) {
                notificationToArchive = this.notifications.pop();
                this.notificationsArchive.archive(notificationToArchive);
            }
        };

        NotificationsService.prototype.getCurrent = function () {
            return this.notifications;
        };
        return NotificationsService;
    })();
    NotificationsModule.NotificationsService = NotificationsService;
})(NotificationsModule || (NotificationsModule = {}));
//# sourceMappingURL=notifications.js.map
