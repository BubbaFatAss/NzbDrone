﻿using System;
using System.Collections.Generic;
using NzbDrone.Core.Repository.Quality;
using PetaPoco;

namespace NzbDrone.Core.Repository
{
    [TableName("EpisodeFiles")]
    [PrimaryKey("EpisodeFileId", autoIncrement = true)]
    public class EpisodeFile
    {
        public EpisodeFile()
        {
            
        }

        public EpisodeFile(EpisodeFile source)
        {
            EpisodeFileId = source.EpisodeFileId;
            SeriesId = source.SeriesId;
            SeasonNumber = source.SeasonNumber;
            Path = source.Path;
            Quality = source.Quality;
            Proper = source.Proper;
            Size = source.Size;
        }

        public int EpisodeFileId { get; set; }

        public int SeriesId { get; set; }
        public int SeasonNumber { get; set; }
        public string Path { get; set; }
        public QualityTypes Quality { get; set; }
        public bool Proper { get; set; }
        public long Size { get; set; }
        public DateTime DateAdded { get; set; }
        public string SceneName { get; set; }
        public string ReleaseGroup { get; set; }
        public string SubGroup { get; set; }

        [Ignore]
        public Model.QualityModel QualityWrapper
        {
            get
            {
                return new Model.QualityModel(Quality, Proper);
            }
            set
            {
                Quality = value.Quality;
                Proper = value.Proper;
            }
        }
    }
}