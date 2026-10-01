import React, { useState } from "react";
import Layout from "@theme/Layout";
import SkillBrowser from "@site/src/components/SkillBrowser";
import HubHero from "@site/src/components/HubHero";

export default function Hub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <Layout
      title="MAAP AI Plugins"
      description="AI plugins — skills and MCP servers — for the Multi-Mission Algorithm and Analysis Platform"
    >
      <HubHero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
      />
      <div id="hub-content" style={{ paddingTop: isSearchActive ? "0" : undefined }}>
        <SkillBrowser
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isSearchActive={isSearchActive}
        />
      </div>
    </Layout>
  );
}
