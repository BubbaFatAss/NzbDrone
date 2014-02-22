﻿using System;
using NzbDrone.Core.Datastore;
using NzbDrone.Core.Download;
using NzbDrone.Core.Messaging.Commands;
using NzbDrone.Core.Messaging.Events;

namespace NzbDrone.Core.Blacklisting
{
    public interface IBlacklistService
    {
        bool Blacklisted(int seriesId,string sourceTitle);
        PagingSpec<Blacklist> Paged(PagingSpec<Blacklist> pagingSpec);
        void Delete(int id);
    }

    public class BlacklistService : IBlacklistService, IHandle<DownloadFailedEvent>, IExecute<ClearBlacklistCommand>
    {
        private readonly IBlacklistRepository _blacklistRepository;
        private readonly IRedownloadFailedDownloads _redownloadFailedDownloadService;

        public BlacklistService(IBlacklistRepository blacklistRepository, IRedownloadFailedDownloads redownloadFailedDownloadService)
        {
            _blacklistRepository = blacklistRepository;
            _redownloadFailedDownloadService = redownloadFailedDownloadService;
        }

        public bool Blacklisted(int seriesId, string sourceTitle)
        {
            return _blacklistRepository.Blacklisted(seriesId,sourceTitle);
        }

        public PagingSpec<Blacklist> Paged(PagingSpec<Blacklist> pagingSpec)
        {
            return _blacklistRepository.GetPaged(pagingSpec);
        }

        public void Delete(int id)
        {
            _blacklistRepository.Delete(id);
        }

        public void Handle(DownloadFailedEvent message)
        {
            var blacklist = new Blacklist
                            {
                                SeriesId = message.SeriesId,
                                EpisodeIds = message.EpisodeIds,
                                SourceTitle = message.SourceTitle,
                                Quality = message.Quality,
                                Date = DateTime.UtcNow
                            };

            _blacklistRepository.Insert(blacklist);

            _redownloadFailedDownloadService.Redownload(message.SeriesId, message.EpisodeIds);
        }

        public void Execute(ClearBlacklistCommand message)
        {
            _blacklistRepository.Purge();
        }
    }
}
