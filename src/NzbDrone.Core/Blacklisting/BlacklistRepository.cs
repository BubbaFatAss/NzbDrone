﻿using System;
using System.Collections.Generic;
using System.Linq;
using NzbDrone.Core.Datastore;
using NzbDrone.Core.Messaging.Events;

namespace NzbDrone.Core.Blacklisting
{
    public interface IBlacklistRepository : IBasicRepository<Blacklist>
    {
        bool Blacklisted(int seriesId, string sourceTitle);
        List<Blacklist> BlacklistedBySeries(int seriesId);
    }

    public class BlacklistRepository : BasicRepository<Blacklist>, IBlacklistRepository
    {
        public BlacklistRepository(IDatabase database, IEventAggregator eventAggregator) :
            base(database, eventAggregator)
        {
        }

        public bool Blacklisted(int seriesId, string sourceTitle)
        {
            return Query.Where(e => e.SeriesId == seriesId)
                        .AndWhere(e => e.SourceTitle.Contains(sourceTitle))
                        .Any();
        }

        public List<Blacklist> BlacklistedBySeries(int seriesId)
        {
            return Query.Where(b => b.SeriesId == seriesId);
        }
    }
}
